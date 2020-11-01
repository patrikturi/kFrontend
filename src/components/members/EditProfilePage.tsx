import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from 'react-use-fetch-ts';
import { patchProfileConfig } from '../../common/fetchConfig';
import { COLOR_FAILURE, COLOR_SUCCESS } from '../../common/styles';
import { SiteContext } from '../../context/SiteContext';
import Spinner from '../common/Spinner';
import PageTitle from './atoms/PageTitle';
import { useTranslation } from 'react-i18next';
import { checkResponseErrorsWithLogout } from '../../common/utils';
import { useHistory } from 'react-router-dom';

const EditProfilePage = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [introduction, setIntroduction] = useState('');
  const [biography, setBiography] = useState('');
  const [patchProfileResult, patchProfile] = useFetch(patchProfileConfig);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    if (context.isProfileLoaded) {
      setIntroduction(context.introduction || '');
      setBiography(context.biography || '');
    }
  }, [context.isProfileLoaded, context.introduction, context.biography]);

  useEffect(() => {
    const responseStatus = patchProfileResult.responseStatus;

    if (responseStatus === 200) {
      setMessage(t('Profile saved'));
      setHasError(false);
      dispatch({ type: 'UPDATE_PROFILE', data: patchProfileResult.result });
    } else {
      checkResponseErrorsWithLogout(
        patchProfileResult,
        t,
        dispatch,
        history,
        setMessage,
        setHasError
      );
    }
  }, [dispatch, patchProfileResult, message, t, history]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    patchProfile(
      context.userId!,
      { introduction: introduction, user_details: { biography: biography } },
      csrfToken
    );
  };

  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue.length <= 255) {
      setIntroduction(newValue);
    }
  };

  const onChangeBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue.length <= 2048) {
      setBiography(newValue);
    }
  };

  const editForm = (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xl={9}>
          <Form.Group controlId="introduction">
            <Form.Label>{t('Introduction')}</Form.Label>
            <Form.Control
              value={introduction}
              onChange={onChangeIntro}
            ></Form.Control>
            <Form.Text>{t('Your short introduction')}</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t('Biography')}</Form.Label>
            <Form.Control
              as="textarea"
              rows={12}
              value={biography}
              onChange={onChangeBio}
            />
            <Form.Text>{t('Your biography in kSoccer')}</Form.Text>
          </Form.Group>
          <div style={{ height: '40px', width: '100px', marginBottom: '20px' }}>
            {patchProfileResult.loading ? (
              <Spinner />
            ) : (
              <Button
                type="submit"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                {t('Save')}
              </Button>
            )}
          </div>
          <Form.Group>
            <label
              style={{
                color: `${hasError ? COLOR_FAILURE : COLOR_SUCCESS}`,
                fontWeight: 'bold',
              }}
            >
              {message}
            </label>
          </Form.Group>
          <a href="/profile/2">{t('See your profile here')}</a>
        </Col>
      </Row>
    </Form>
  );

  return (
    <>
      <PageTitle>{t('Edit Profile')}</PageTitle>
      {context.errorMessage && (
        <div style={{ color: COLOR_FAILURE }}>{context.errorMessage}</div>
      )}
      {context.isLoading ? <Spinner /> : editForm}
    </>
  );
};

export default EditProfilePage;

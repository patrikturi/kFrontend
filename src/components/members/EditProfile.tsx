import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from 'react-use-fetch-ts';
import { patchProfileConfig } from '../../common/fetchConfig';
import { SiteContext } from '../../context/SiteContext';
import PageTitle from './atoms/PageTitle';
import Spinner from '../common/Spinner';
import { COLOR_FAILURE, COLOR_SUCCESS } from '../../common/styles';

const EditProfile = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [introduction, setIntroduction] = useState('');
  const [biography, setBiography] = useState('');
  const [patchProfileResult, patchProfile] = useFetch(patchProfileConfig);
  const [saveMessage, setSaveMessage] = useState('');
  const [messageIsError, setMessageIsError] = useState(false);

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    if (context.isProfileLoaded) {
      setIntroduction(context.introduction || '');
      setBiography(context.biography || '');
    }
  }, [context.isProfileLoaded, context.introduction, context.biography]);

  useEffect(() => {
    const responseStatus = patchProfileResult.responseStatus;
    if (responseStatus && responseStatus >= 400) {
      if (responseStatus >= 500) {
        setSaveMessage(
          'Unable to reach the server at the moment. Please try again later.'
        );
      } else {
        setSaveMessage('Something went wrong');
      }
      setMessageIsError(true);
    } else if (responseStatus === 200) {
      setSaveMessage('Profile saved');
      setMessageIsError(false);
      dispatch({ type: 'UPDATE_PROFILE', data: patchProfileResult.result });
    }
  }, [
    dispatch,
    patchProfileResult.result,
    patchProfileResult.responseStatus,
    messageIsError,
    saveMessage,
  ]);

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
            <Form.Label>Introduction</Form.Label>
            <Form.Control
              value={introduction}
              onChange={onChangeIntro}
            ></Form.Control>
            <Form.Text>Your short introduction.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Biography</Form.Label>
            <Form.Control
              as="textarea"
              rows={12}
              value={biography}
              onChange={onChangeBio}
            />
            <Form.Text>Your biography in kSoccer.</Form.Text>
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
                Save
              </Button>
            )}
          </div>
          <Form.Group>
            <label
              style={{
                color: `${messageIsError ? COLOR_FAILURE : COLOR_SUCCESS}`,
                fontWeight: 'bold',
              }}
            >
              {saveMessage}
            </label>
          </Form.Group>
          <a href="/profile/2">See your profile here</a>
        </Col>
      </Row>
    </Form>
  );

  return (
    <>
      <PageTitle>Edit Profile</PageTitle>
      {context.errorMessage && (
        <div style={{ color: COLOR_FAILURE }}>{context.errorMessage}</div>
      )}
      {context.isLoading ? <Spinner /> : editForm}
    </>
  );
};

export default EditProfile;

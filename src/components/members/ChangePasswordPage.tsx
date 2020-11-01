import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from 'react-use-fetch-ts';
import { changePasswordConfig } from '../../common/fetchConfig';
import { COLOR_FAILURE, COLOR_SUCCESS } from '../../common/styles';
import { SiteContext } from '../../context/SiteContext';
import Spinner from '../common/Spinner';
import PageTitle from './atoms/PageTitle';
import { useTranslation } from 'react-i18next';
import { checkResponseErrors } from '../../common/utils';

const ChangePasswordPage = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [changePasswordResult, changePassword] = useFetch(changePasswordConfig);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    const responseStatus = changePasswordResult.responseStatus;

    if (responseStatus === 200 && !hasError) {
      setMessage(t('Password updated'));
      setHasError(false);
    } else if (responseStatus === 401) {
      setMessage(t('Old Password is incorrect'));
      setHasError(true);
    } else {
      checkResponseErrors(changePasswordResult, t, setMessage, setHasError);
    }
  }, [dispatch, changePasswordResult, hasError, message, t]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let error = false;
    if (!oldPassword) {
      setMessage(t('Old Password is empty'));
      error = true;
    } else if (!newPassword) {
      setMessage(t('New Password is empty'));
      error = true;
    } else if (!newPassword2) {
      setMessage(t('Repeat New Password is empty'));
      error = true;
    } else if (newPassword.length < 8) {
      setMessage(t(`New Password must be at least ${8} characters long`));
      error = true;
    } else if (newPassword !== newPassword2) {
      setMessage(t('The specified passwords do not match'));
      error = true;
    }
    if (error) {
      setHasError(true);
    } else {
      if (message) {
        setMessage('');
      }
      const formData = new FormData();
      formData.append('old_password', oldPassword);
      formData.append('new_password', newPassword);

      changePassword(formData, csrfToken);
    }
  };

  const onChangeOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue.length <= 255) {
      setOldPassword(newValue);
    }
  };

  const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue.length <= 255) {
      setNewPassword(newValue);
    }
  };

  const onChangeNewPassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (newValue.length <= 255) {
      setNewPassword2(newValue);
    }
  };

  const editForm = (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xl={3}>
          <Form.Group>
            <Form.Label>{t('Old Password')}</Form.Label>
            <Form.Control
              value={oldPassword}
              onChange={onChangeOldPassword}
              type="password"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t('New Password')}</Form.Label>
            <Form.Control
              value={newPassword}
              onChange={onChangeNewPassword}
              type="password"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t('Repeat New Password')}</Form.Label>
            <Form.Control
              value={newPassword2}
              onChange={onChangeNewPassword2}
              type="password"
            ></Form.Control>
          </Form.Group>
          <div style={{ height: '40px', width: '100px', marginBottom: '20px' }}>
            {changePasswordResult.loading ? (
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
        </Col>
      </Row>
    </Form>
  );

  return (
    <>
      <PageTitle>{t('Change Password')}</PageTitle>
      {context.errorMessage && (
        <div style={{ color: COLOR_FAILURE }}>{context.errorMessage}</div>
      )}
      {context.isLoading ? <Spinner /> : editForm}
    </>
  );
};

export default ChangePasswordPage;

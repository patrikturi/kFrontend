import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from 'react-use-fetch-ts';
import { changePasswordConfig } from '../../common/fetchConfig';
import { SiteContext } from '../../context/SiteContext';
import PageTitle from './atoms/PageTitle';
import Spinner from '../common/Spinner';
import { COLOR_FAILURE, COLOR_SUCCESS } from '../../common/styles';

const ChangePasswordPage = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [changePasswordResult, changePassword] = useFetch(changePasswordConfig);
  const [saveMessage, setSaveMessage] = useState('');
  const [messageIsError, setMessageIsError] = useState(false);

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    const responseStatus = changePasswordResult.responseStatus;
    if (responseStatus && responseStatus >= 400) {
      if (responseStatus >= 500) {
        setSaveMessage(
          'Unable to reach the server at the moment. Please try again later.'
        );
      } else if (responseStatus === 400) {
        setSaveMessage(
          'New Password was not accepted. Try choosing a different password.'
        );
      } else if (responseStatus === 401) {
        setSaveMessage('Old Password is incorrect');
      } else {
        setSaveMessage('Something went wrong');
      }
      setMessageIsError(true);
    } else if (responseStatus === 200) {
      setSaveMessage('Password updated');
      setMessageIsError(false);
    }
  }, [
    dispatch,
    changePasswordResult.result,
    changePasswordResult.responseStatus,
    messageIsError,
    saveMessage,
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let error = false;
    if (!oldPassword) {
      setSaveMessage('Old Password is empty');
      error = true;
    } else if (!newPassword) {
      setSaveMessage('New Password is empty');
      error = true;
    } else if (!newPassword2) {
      setSaveMessage('Repeat New Password is empty');
      error = true;
    } else if (newPassword.length < 8) {
      setSaveMessage('New Password must be at least 8 characters long');
      error = true;
    } else if (newPassword !== newPassword2) {
      setSaveMessage('The specified passwords do not match');
      error = true;
    }
    if (error) {
      setMessageIsError(true);
    } else {
      if (saveMessage) {
        setSaveMessage('');
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
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              value={oldPassword}
              onChange={onChangeOldPassword}
              type="password"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              value={newPassword}
              onChange={onChangeNewPassword}
              type="password"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Repeat New Password</Form.Label>
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
        </Col>
      </Row>
    </Form>
  );

  return (
    <>
      <PageTitle>Change Password</PageTitle>
      {context.errorMessage && (
        <div style={{ color: COLOR_FAILURE }}>{context.errorMessage}</div>
      )}
      {context.isLoading ? <Spinner /> : editForm}
    </>
  );
};

export default ChangePasswordPage;

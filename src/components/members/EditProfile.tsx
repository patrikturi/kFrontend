import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFetch } from 'react-use-fetch-ts';
import styled from 'styled-components';
import { getMyProfileConfig, patchProfileConfig } from '../../common/fetchConfig';
import { SiteContext } from '../../context/SiteContext';
import PageTitle from './atoms/PageTitle';
import Spinner from '../common/Spinner';

const COLOR_RED = '#d70000';
const COLOR_GREEN = '#00EF00';

const EditProfile = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [introduction, setIntroduction] = useState(context.introduction);
  const [biography, setBiography] = useState(context.biography);
  const [getProfileResult, getProfile] = useFetch(getMyProfileConfig);
  const [patchProfileResult, patchProfile] = useFetch(patchProfileConfig);
  const [saveMessage, setSaveMessage] = useState('');
  const [messageIsError, setMessageIsError] = useState(false);

  const csrfToken = localStorage.getItem('csrfToken') || '';

  // useEffect(() => {
  //   if(!introduction && context.introduction) {
  //     setIntroduction(context.introduction);
  //   }
  //   if(!biography && context.biography) {
  //     setBiography(context.biography);
  //   }
  // }, [introduction, context.introduction, biography, context.biography]);

  useEffect(() => {
    const responseStatus = patchProfileResult.responseStatus;
    if (responseStatus && responseStatus >= 400 && (!saveMessage || !messageIsError)) {
      if (responseStatus >= 500) {
        setSaveMessage('Unable to reach the server at the moment. Please try again later.');
        setMessageIsError(true);
      }
      setSaveMessage('Something went wrong');
      setMessageIsError(true);
    } else if (responseStatus === 200) {
      setSaveMessage('Profile saved!');
      setMessageIsError(false);
      dispatch({ type: 'UPDATE_PROFILE', data: patchProfileResult.result });
    }
  }, [dispatch, patchProfileResult.result, patchProfileResult.responseStatus, messageIsError, saveMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    patchProfile(context.userId!, {'introduction': introduction, 'user_details': {'biography': biography}}, csrfToken);
  }

  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduction(e.currentTarget.value);
  }

  const onChangeBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBiography(e.currentTarget.value);
  }

  return (
    <>
      <PageTitle>Edit Profile</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xl={9}>
            <Form.Group controlId="introduction">
              <Form.Label>Introduction</Form.Label>
              <Form.Control value={introduction} onChange={onChangeIntro}></Form.Control>
            <Form.Text>Your short introduction.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Biography</Form.Label>
              <Form.Control as="textarea" rows={5} value={biography} onChange={onChangeBio} />
              <Form.Text>Your biography in kSoccer.</Form.Text>
            </Form.Group>
            <div style={{height: '40px', width: '100px', marginBottom: '20px'}}>
            {patchProfileResult.loading ? <Spinner /> :
              (<Button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                Save
              </Button>)}
              </div>
            <Form.Group>
                <label style={{ color: `${messageIsError ? COLOR_RED : COLOR_GREEN}`, fontWeight: 'bold' }}>
                  {saveMessage}
                </label>
            </Form.Group>
            <a href="/profile/2">See your profile here</a>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default EditProfile;

import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import PageTitle from './atoms/PageTitle';
import { Form, Row, Col } from 'react-bootstrap';
import {SiteContext} from '../../context/SiteContext';

const SubTitle = styled.h4`
  color: #5a5c69;
  margin-bottom: 1.5rem;
`;

const MyProfile = () => {
  const [context, dispatch] = useContext(SiteContext);
  const [introduction, setIntroduction] = useState('');
  const [biography, setBiography] = useState('');

  useEffect(() => {
    if(!introduction && context.introduction) {
      setIntroduction(context.introduction);
    }
    if(!biography && context.biography) {
      setBiography(context.biography);
    }
  }, [introduction, context.introduction, biography, context.biography]);

  return (
    <>
      <PageTitle>Edit Profile</PageTitle>
      <Form>
        <Row>
          <Col xl={9}>
            <Form.Group controlId="introduction">
              <Form.Label>Introduction</Form.Label>
              <Form.Control value={introduction}></Form.Control>
            <Form.Text>Your short introduction.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Biography</Form.Label>
              <Form.Control as="textarea" rows={5} value={biography} />
              <Form.Text>Your biography in kSoccer.</Form.Text>
            </Form.Group>
            <a href="/profile/2">See your profile here</a>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MyProfile;

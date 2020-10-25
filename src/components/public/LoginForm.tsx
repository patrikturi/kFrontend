import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { SiteContext } from '../../context/SiteContext';
import { WIDTH_XS } from '../../common/styles';
import { loginConfig } from '../../common/fetchConfig';
import Spinner from '../common/Spinner';
import { useFetch } from 'react-use-fetch-ts';

const Container = styled.div`
  width: 80%;
  margin-left: 10%;

  @media (min-width: ${WIDTH_XS}) {
    width: 460px;
    margin-right: 10vw;
    margin-left: auto;
  }
`;

type Props = {};

export const LoginForm = (props: Props) => {
  const [loginResult, login] = useFetch(loginConfig);
  const [errorMessage, setErrorMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [, dispatch] = useContext(SiteContext);
  const history = useHistory();

  useEffect(() => {
    const fetchCsrf = async () => {
      const BACKEND_URL = 'https://backend.ksoccersl.com';
      const IS_PRODUCTION = process.env.NODE_ENV !== 'development';

      const API_PREFIX = IS_PRODUCTION ? BACKEND_URL : '';

      if(!getCookie('csrftoken')) {
        const response = await fetch(`${API_PREFIX}/api/v1/core/csrf-token/`);
        const body = await response.json();
        setCsrfToken(body['token']);
      }
    };

    fetchCsrf();
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;

    const firstNameField = form[0] as HTMLInputElement;
    const lastNameField = form[1] as HTMLInputElement;
    const passwordNameField = form[2] as HTMLInputElement;
    const username = (firstNameField.value + ' ' + lastNameField.value).trim();
    const password = passwordNameField.value?.trim() || '';

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    if (errorMessage) {
      setErrorMessage('');
    }
    if (csrfToken) {
      login(formData, { 'X-CSRFToken': getCookie('csrftoken') });
    }
  };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    history.goBack();
  };

  useEffect(() => {
    const responseStatus = loginResult.responseStatus;
    if (responseStatus && responseStatus >= 400 && !errorMessage) {
      if (responseStatus >= 500) {
        setErrorMessage('Unable to login at the moment. Try again later.');
      } else if (responseStatus === 401) {
        setErrorMessage('Invalid username or password');
      } else if (responseStatus >= 400) {
        setErrorMessage('Something went wrong');
      }
    } else if (responseStatus === 200) {
      history.push('/dashboard/');
      dispatch({ type: 'LOGIN_SUCCESS', data: loginResult.result });
    } else if (loginResult.error && !errorMessage) {
      setErrorMessage('Something is broken');
    }
  }, [dispatch, history, loginResult, errorMessage]);

  return (
    <Row className="pt-5 pb-5 m-0">
      <Container>
        <Card style={{ backgroundColor: 'black', color: 'white' }}>
          <Card.Header
            className="text-left"
            style={{ backgroundColor: '#d1d1d1', color: 'black' }}
          >
            <a href="/" onClick={handleGoBack}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
            </a>{' '}
            Go back
          </Card.Header>
          <Card.Body className="text-left">
            <h2>Log in</h2>
            <p>Log in to get access to your profile and stats</p>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <label htmlFor="first_name">SL First Name</label>
                <input type="text" className="form-control" id="first_name" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="last_name">SL Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Resident"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </Form.Group>
              <Form.Group>
                <label style={{ color: '#d70000', fontWeight: 'bold' }}>
                  {errorMessage}
                </label>
              </Form.Group>
              {loginResult.loading ? (
                <Spinner width="100px" />
              ) : (
                <Button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100px' }}
                >
                  Log in
                </Button>
              )}
              <Form.Text>
                Don't have an account yet? See{' '}
                <a href="/register">registration steps</a>
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

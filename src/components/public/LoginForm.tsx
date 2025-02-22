import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {
  Card,
  Form,
  Button,
  Row,
  OverlayTrigger,
  Popover,
  PopoverContent,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { SiteContext } from '../../context/SiteContext';
import { WIDTH_XS } from '../../common/styles';
import { loginConfig } from '../../common/fetchConfig';
import Spinner from '../common/Spinner';
import { useFetch } from 'react-use-fetch-ts';
import { useTranslation, Trans } from 'react-i18next';
import { checkResponseErrors } from '../../common/utils';

const Container = styled.div`
  width: 80%;
  margin-left: 10%;

  @media (min-width: ${WIDTH_XS}) {
    width: 460px;
    margin-right: 10vw;
    margin-left: auto;
  }
`;

const NoWrap = styled.span`
  white-space: nowrap;
`;

const InfoWrapper = styled.span`
  margin-left: 10px;
`;

type Props = {};

export const LoginForm = (props: Props) => {
  const [loginResult, login] = useFetch(loginConfig);
  const [errorMessage, setErrorMessage] = useState('');
  const [context, dispatch] = useContext(SiteContext);
  const { t } = useTranslation();
  const history = useHistory();

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    const fetchCsrf = async () => {
      const API_PREFIX = 'https://backend.ksoccersl.com';

      if (!context.csrfToken) {
        const response = await fetch(`${API_PREFIX}/api/v1/core/csrf-token/`, {
          mode: 'cors',
          credentials: 'include',
        });
        const body = await response.json();
        dispatch({ type: 'SET_CSRF_TOKEN', data: body });
      }
    };

    fetchCsrf();
  }, [context.csrfToken, dispatch]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;

    const fullNameField = form[0] as HTMLInputElement;
    const passwordNameField = form[1] as HTMLInputElement;
    const username = fullNameField.value.trim();
    const password = passwordNameField.value?.trim() || '';

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    if (!username) {
      setErrorMessage(t('Name field is empty'));
    } else if (!password) {
      setErrorMessage(t('Password is empty'));
    } else {
      if (errorMessage) {
        setErrorMessage('');
      }
      login(formData, csrfToken);
    }
  };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    history.goBack();
  };

  useEffect(() => {
    const responseStatus = loginResult.responseStatus;

    if (responseStatus === 200 && !loginResult.error) {
      history.push('/dashboard/');
      dispatch({ type: 'LOGIN_SUCCESS', data: loginResult.result });
    } else if (responseStatus === 401) {
      setErrorMessage(t('Invalid username or password'));
    } else {
      checkResponseErrors(loginResult, t, setErrorMessage);
    }
  }, [dispatch, history, loginResult, errorMessage, t]);

  if (csrfToken && localStorage.getItem('userId')) {
    return <Redirect to="/dashboard/" />;
  }

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
            {t('Go back')}
          </Card.Header>
          <Card.Body className="text-left">
            <h2>{t('Log in')}</h2>
            <p>{t('Log in to access to your profile and stats')}</p>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <label htmlFor="sl-full-name">{t('SL Full Name')}</label>
                <InfoWrapper>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Popover id="tooltip-fullname">
                        <PopoverContent>
                          <Trans>
                            The name you use for logging in to{' '}
                            <NoWrap>Second Life</NoWrap>.
                          </Trans>
                        </PopoverContent>
                      </Popover>
                    }
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      style={{ color: '#007bff' }}
                    />
                  </OverlayTrigger>
                </InfoWrapper>
                <input
                  type="text"
                  className="form-control"
                  id="slfullname"
                  name="sl-full-name"
                  autoComplete="sl-full-name"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputPassword1">{t('Password')}</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </Form.Group>
              <Form.Group>
                <label style={{ color: '#d70000', fontWeight: 'bold' }}>
                  {errorMessage}
                </label>
              </Form.Group>
              <div style={{ width: '100px', height: '40px' }}>
                {loginResult.loading ? (
                  <Spinner />
                ) : (
                  <Button
                    type="submit"
                    className="btn-primary"
                    disabled={!context.csrfToken}
                  >
                    {t('Log in')}
                  </Button>
                )}
              </div>
              <Form.Text>
                {t("Don't have an account yet?")}{' '}
                <Trans>
                  See <a href="/register/">registration steps</a>
                </Trans>
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

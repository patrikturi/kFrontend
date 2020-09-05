import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { SiteContext } from '../../context/SiteContext';
import { WIDTH_XS } from '../../common/styles';

type Props = {};

export const LoginForm = (props: Props) => {
  const [, dispatch] = useContext(SiteContext);
  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    history.push('/');
  };

  const Container = styled.div`
    width: 80%;
    margin-left: 10%;

    @media (min-width: ${WIDTH_XS}) {
      width: 460px;
      margin-right: 10vw;
      margin-left: auto;
    }
  `;

  return (
    <>
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
            <p>Log in to get access to your kSoccer stats</p>
            <Form>
              <Form.Group>
                <label htmlFor="first_name">SL first name</label>
                <input type="text" className="form-control" id="first_name" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="last_name">SL last name</label>
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
              <Button
                type="submit"
                className="btn-primary"
                onClick={handleLogin}
              >
                Log in
              </Button>
              <Form.Text>
                Don't have an account yet? See{' '}
                <a href="/register">registration steps</a>
              </Form.Text>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { WIDTH_XS } from '../../common/styles';

type RegProps = {};

export const RegistrationForm = (props: RegProps) => {
  const history = useHistory();

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
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
            <h2>Register</h2>
            <p>1. Type "reset password" near a totem</p>
            <p>
              2. Copy your password from the chat and{' '}
              <a href="/login">login here</a>
            </p>
            <p>
              Need more help? Go to{' '}
              <a href="/getting-started">Getting Started</a>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

import React from 'react';
import styled from 'styled-components';
import { Row, Form } from 'react-bootstrap';
import StatCard from './StatCard';
import {
  faTrophy,
  faFutbol,
  faHandsHelping,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import PageTitle from './atoms/PageTitle';

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const DashboardContent = () => {
  return (
    <>
      <TitleRow>
        <PageTitle>Dashboard</PageTitle>
        <Form.Group>
          <Form.Check type="checkbox" label="Available for transfer" />
          <Form.Text>Check this if you are looking for a club</Form.Text>
        </Form.Group>
      </TitleRow>
      <Row>
        <StatCard
          variant="warning"
          icon={faTrophy}
          name="kCoins"
          value={20}
        ></StatCard>
        <StatCard
          variant="primary"
          icon={faFutbol}
          name="Goals"
          value={3}
        ></StatCard>
        <StatCard
          variant="success"
          icon={faHandsHelping}
          name="Assists"
          value={5}
        ></StatCard>
        <StatCard
          variant="info"
          icon={faStopwatch}
          name="Matches"
          value={100}
        ></StatCard>
      </Row>
      <Row></Row>
    </>
  );
};

export default DashboardContent;

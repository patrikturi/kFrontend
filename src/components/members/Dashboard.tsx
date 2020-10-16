import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import { Row, Container } from 'react-bootstrap';
import StatCard from './StatCard';
import {
  faTrophy,
  faFutbol,
  faHandsHelping,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

const StyledDashboard = styled.div`
  display: flex;
  background-color: #f8f9fc;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #858796;
`;

const Content = styled.div`
  width: 100%;
`;

const StyledContainer = styled(Container)``;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const Footer = styled.footer`
  padding: 2rem 0;
  width: 100%;
  margin-top: auto;
  align-self: flex-end;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 0.8rem;
`;

export const Dashboard = (): JSX.Element => {
  return (
    <StyledDashboard>
      <Sidebar></Sidebar>
      <ContentWrapper>
        <Content>
          <DashboardNavbar></DashboardNavbar>
          <StyledContainer fluid>
            <Title className="text-gray-800">Dashboard</Title>
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
          </StyledContainer>
        </Content>
        <Footer>
          <FooterText>Copyright © kSoccer 2020</FooterText>
        </Footer>
      </ContentWrapper>
    </StyledDashboard>
  );
};

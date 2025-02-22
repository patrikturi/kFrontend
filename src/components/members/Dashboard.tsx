import React, { Suspense } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import { Container } from 'react-bootstrap';
import DashboardHomePage from './DashboardHomePage';
import EditProfilePage from './EditProfilePage';
import { Route, Switch } from 'react-router-dom';
import ChangePasswordPage from './ChangePasswordPage';

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
      <Suspense fallback="Loading">
        <Sidebar></Sidebar>
        <ContentWrapper>
          <Content>
            <DashboardNavbar></DashboardNavbar>
            <StyledContainer fluid>
              <Switch>
                <Route
                  exact
                  path="/dashboard/"
                  component={DashboardHomePage}
                ></Route>
                <Route
                  path="/dashboard/profile"
                  component={EditProfilePage}
                ></Route>
                <Route
                  path="/dashboard/password-change"
                  component={ChangePasswordPage}
                ></Route>
                <Route component={DashboardHomePage} />
              </Switch>
            </StyledContainer>
          </Content>
          <Footer>
            <FooterText>Copyright © kSoccer 2020</FooterText>
          </Footer>
        </ContentWrapper>
      </Suspense>
    </StyledDashboard>
  );
};

import React, { useContext, useEffect } from 'react';
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
import { useFetch } from 'react-use-fetch-ts';
import { patchProfileConfig } from '../../common/fetchConfig';
import { SiteContext } from '../../context/SiteContext';
import { useHistory } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { COLOR_FAILURE } from '../../common/styles';

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const DashboardContent = () => {
  const [patchProfileResult, patchProfile] = useFetch(patchProfileConfig);
  const [context, dispatch] = useContext(SiteContext);
  const history = useHistory();

  const csrfToken = localStorage.getItem('csrfToken') || '';

  useEffect(() => {
    const responseStatus = patchProfileResult.responseStatus;
    if (responseStatus === 200) {
      dispatch({ type: 'UPDATE_PROFILE', data: patchProfileResult.result });
    } else if (responseStatus === 401) {
      dispatch({ type: 'LOGOUT_SUCCESS' });
      history.push('/login/');
    }
  }, [dispatch, history, patchProfileResult]);

  const handleAvailabilityChange = () => {
    const formData = {
      available_for_transfer: context.availableForTransfer ? false : true,
    };
    patchProfile(context.userId!, formData, csrfToken);
  };

  const stats = (
    <Row>
      <StatCard
        variant="warning"
        icon={faTrophy}
        name="kCoins"
        value={context.kcoins ?? '?'}
      ></StatCard>
      <StatCard
        variant="primary"
        icon={faFutbol}
        name="Goals"
        value={context.goals ?? '?'}
      ></StatCard>
      <StatCard
        variant="success"
        icon={faHandsHelping}
        name="Assists"
        value={context.assists ?? '?'}
      ></StatCard>
      <StatCard
        variant="info"
        icon={faStopwatch}
        name="Matches"
        value={context.matches ?? '?'}
      ></StatCard>
    </Row>
  );

  return (
    <>
      <TitleRow>
        <PageTitle>Dashboard</PageTitle>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Available for transfer"
            disabled={context.isLoading}
            checked={context.availableForTransfer || false}
            onChange={handleAvailabilityChange}
          />
          <Form.Text>Check this if you are looking for a club</Form.Text>
        </Form.Group>
      </TitleRow>
      {context.errorMessage && <div style={{color: COLOR_FAILURE}}>{context.errorMessage}</div>}
      {context.isLoading ? <Spinner /> : stats}
      <Row></Row>
    </>
  );
};

export default DashboardContent;

import React from 'react';
import styled from 'styled-components';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = (): JSX.Element => {
  return (
    <SpinnerWrapper>
      <BootstrapSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </SpinnerWrapper>
  );
};

export default Spinner;

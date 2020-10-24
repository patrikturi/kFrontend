import React from 'react';
import styled from 'styled-components';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

interface Props {
  width?: string;
}

const SpinnerWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.width ? `width: ${props.width}` : '')}
`;

const Spinner = (props: Props): JSX.Element => {
  return (
    <SpinnerWrapper width={props?.width}>
      <BootstrapSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </SpinnerWrapper>
  );
};

export default Spinner;

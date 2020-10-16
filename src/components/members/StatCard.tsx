import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Props {
  icon: IconDefinition;
  name: string;
  value: number;
  variant: 'warning' | 'primary' | 'info' | 'success';
}

const StyledCol = styled(Col)`
  margin-bottom: 1.5rem;
`;

const StatCard = (props: Props): JSX.Element => {
  return (
    <StyledCol xl={3} md={6}>
      <div className={`card border-left-${props.variant} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${props.variant} text-uppercase mb-1`}
              >
                {props.name}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.value}
              </div>
            </div>
            <div className="col-auto">
              <FontAwesomeIcon
                icon={props.icon}
                className="fa-2x text-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledCol>
  );
};

export default StatCard;

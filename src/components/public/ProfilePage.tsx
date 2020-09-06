import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Panel = styled.div`
  margin: 0 auto;
  background-color: black;
  border-radius: 25px;
  padding-bottom: 45px;
  color: white;
  padding: 20px;
`;

const GoBack = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  color: white;
`;

const ProfilePicture = styled.img`
  border: 2px solid white;
`;

const ProfilePage: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Row className="pt-5 pb-5 m-0">
      <GoBack>
        <div onClick={handleGoBack}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
        </div>{' '}
        Go back
      </GoBack>
      <Panel className="col-md-8 text-left">
        <h2>Someguy</h2>
        <ProfilePicture
          src="https://my-secondlife-agni.akamaized.net/users/m4ximo/sl_image.png"
          alt="profile"
        />
        <h3>Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3>Profile</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <h3>Stats</h3>
        <p>Matches: 15, Goals: 2, Assists: 3, Points: 1500</p>
      </Panel>
    </Row>
  );
};

export default ProfilePage;

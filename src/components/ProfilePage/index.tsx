import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>Felipe Santana</h1>
        <h2>@felipe_santana</h2>

        <p>
          Developer at <a href=".">@box_delivery</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Born July 12
          </li>
        </ul>

        <Followage>
          <span>
            <strong>345</strong> Following
          </span>
          <span>
            <strong>980</strong> Followers
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
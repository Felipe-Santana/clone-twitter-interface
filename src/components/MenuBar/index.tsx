import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>
      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Felipe Santana</strong>
          <span>@felipe_santana</span>
        </ProfileData>

        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;

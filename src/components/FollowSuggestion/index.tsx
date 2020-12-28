import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  profileImageUrl: string;
}

const FollowSuggestion: React.FC<Props> = ({
  name,
  nickname,
  profileImageUrl,
}) => {
  return (
    <Container>
      <div>
        <Avatar src={profileImageUrl} />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;

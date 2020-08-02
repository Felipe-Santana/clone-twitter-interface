import React from 'react';

import {
  Container,
  RocketseatIcon,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Status,
  Icons,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You Retweeted
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 jun</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              23
            </Status>
            <Status>
              <RetweetIcon />
              48
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

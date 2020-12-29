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

interface TweetProps {
  likes: string;
  comments: string;
  retweets: string;
  imageUrl?: string;
}

const Tweet: React.FC<TweetProps> = ({
  likes,
  comments,
  retweets,
  imageUrl,
}) => {
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
            <strong>Felipe Santana</strong>
            <span>@felipe_santana</span>
            <Dot />
            <time>27 jun</time>
          </Header>
          <Description>
            Foguete não tem ré
            <span role="img" aria-label="Rocket">
              🚀
            </span>
          </Description>

          {imageUrl && <ImageContent src={imageUrl} />}

          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

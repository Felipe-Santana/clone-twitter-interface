import React from 'react';

import { Container, Tab, Tweets, Tabs } from './styles';

import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab enabled>Tweets</Tab>
        <Tab>Tweets & Replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </Tabs>

      <Tweets>
        <Tweet
          likes="23"
          comments="50"
          retweets="60"
          imageUrl="https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg"
        />
        <Tweet likes="10" comments="34" retweets="90" />
        <Tweet likes="15" comments="2" retweets="30" />
        <Tweet
          likes="40"
          comments="34"
          retweets="120"
          imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=1100&h=600&s=1"
        />
        <Tweet likes="1" comments="23" retweets="90" />
        <Tweet likes="27" comments="30" retweets="45" />
      </Tweets>
    </Container>
  );
};

export default Feed;

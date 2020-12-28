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
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;

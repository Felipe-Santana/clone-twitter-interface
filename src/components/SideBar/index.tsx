import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search something" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Chris Evans" nickname="@ChrisEvans" />,
            <FollowSuggestion name="Luke Evans" nickname="@TheRealLukevans" />,
            <FollowSuggestion name="Margot Robbie" nickname="@MargotRobbie" />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;

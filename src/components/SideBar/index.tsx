import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion
                name="Chris Evans"
                nickname="@ChrisEvans"
                profileImageUrl="https://pbs.twimg.com/profile_images/1320917504013848577/-VTJLuI9_400x400.jpg"
              />,
              <FollowSuggestion
                name="Luke Evans"
                nickname="@TheRealLukevans"
                profileImageUrl="https://pbs.twimg.com/profile_images/1328266032167915521/tlUbhXlh_400x400.jpg"
              />,
              <FollowSuggestion
                name="Margot Robbie"
                nickname="@MargotRobbie"
                profileImageUrl="https://pbs.twimg.com/profile_images/913101351214710784/414BOKAm_400x400.jpg"
              />,
            ]}
          />

          <List
            title="What's happening"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly}{
    grid-template-columns: repeat(3,calc((100% - 96px) / 3));
    grid-template-areas:
    'main-story main-story secondary-stories'
    'main-story main-story secondary-stories'
    'main-story main-story secondary-stories'
    'advertisement advertisement advertisement'
    'opinion-stories opinion-stories opinion-stories'
  }

  @media ${QUERIES.laptopAndUp}{

    gap: 0;
    grid-template-columns: repeat(3,calc((100% ) / 3));
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement'
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
   @media ${QUERIES.laptopAndUp}{
    padding-right:16px;
    border-right:1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp}{
    padding-left:16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  & > a{
    border-bottom: 1px solid var(--color-gray-300);
    padding:16px 0;
    &:last-of-type{
      border-bottom:none;
      padding-bottom:0;
    }
  }

   
  @media ${QUERIES.tabletOnly}{
    display:grid;
    grid-template-columns: calc((100% - 20px));
    
  }

  @media ${QUERIES.laptopAndUp}{
    padding-right:16px;
    border-right: 1px solid var(--color-gray-300);
    padding-bottom:16px;
  }
`;


const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp}{
    padding-left:16px;
    padding-bottom:16px;
  }
`

const OpinionStoryList = styled.div`

  display:grid;
  gap:32px;  
    @media ${QUERIES.tabletOnly}{
  
    grid-auto-flow: column;
   
  }
  @media ${QUERIES.laptopAndUp}{

    grid-auto-flow:row;
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;

    @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    padding-top:16px;
    margin-top:16px;
    margin-left:16px;
  }
`;

export default MainStoryGrid;

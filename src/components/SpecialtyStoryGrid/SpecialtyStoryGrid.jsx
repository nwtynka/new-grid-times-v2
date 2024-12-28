import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1fr;
    gap: 0px;
  }
`;

const MarketsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const SportsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
  }

  @media (${QUERIES.tabletAndUp}) {
    min-width: 0;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
   display: flex;
   overflow: auto;
   max-width: 100%;
  }
`;

export default SpecialtyStoryGrid;

/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";

const StyledHero = styled.div<ColorProps>`
  ${color}
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1142px;
  margin: 0 auto;
`;

const HeroHeader = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
`;

const HeroList = styled.ul`
  display: flex;
`;

// TODO: de-emoji
const HeroListItem = styled.li`
  margin-left: 2em;
  list-style-type: "✔️";
`;

const HeroSearchContainer = styled.div`
  display: flex;
  margin: calc(4px * 4) 0;
  padding: 4px;
  border-radius: calc(4px * 3);
  background: #ffb700;
  box-shadow: 0 calc(4px / 2) calc(4px * 3) rgb(0 0 0 / 16%);
`;

const HeroSearchInput = styled.input`
  flex-grow: 1;
  height: 64px;
  margin-right: 4px;
  padding: calc(4px * 2);
  padding-left: 44px;
  border: none;
  border-radius: calc(4px * 2) calc(4px / 2) calc(4px / 2) calc(4px * 2);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:focus {
    outline-style: none;
    box-shadow: 0 0 0 3px rgb(18 115 196 / 24%);
  }
`;

const HeroSearchButton = styled.button`
  height: 64px;
  padding: calc(4px * 2) calc(4px * 4);
  border: 1px solid transparent;
  border-radius: calc(4px / 2) calc(4px * 2) calc(4px * 2) calc(4px / 2);
  background-color: #068323;
  color: #fff;
  font-family: "Avenir Next LT Pro", BlinkMacSystemFont, -apple-system,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: #0d6521;
  }
`;

export const SearchHero = (): React.ReactElement => (
  <StyledHero color="foreground" bg="background">
    <HeaderFlexContainer>
      <HeroHeader>Car Hire — Search, Compare &amp; Save</HeroHeader>
      <HeroList>
        <HeroListItem>Free cancellations on most bookings</HeroListItem>
        <HeroListItem>60,000+ locations</HeroListItem>
        <HeroListItem>Customer support in 40+ languages</HeroListItem>
      </HeroList>
      <HeroSearchContainer>
        <HeroSearchInput placeholder="Pick-up Location" />
        <HeroSearchButton>Search</HeroSearchButton>
      </HeroSearchContainer>
    </HeaderFlexContainer>
  </StyledHero>
);

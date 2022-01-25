/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";

import checkmarkIcon from "@assets/checkmark.svg";
import searchIcon from "@assets/search.svg";

// TODO: Import properly
const HERO_BACKGROUND_IMAGE =
  "https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg";

const StyledHero = styled.div<ColorProps>`
  height: min(calc(-260px + 100vh), 596px);
  min-height: 290px;
  background-image: url(${HERO_BACKGROUND_IMAGE});
  background-position: 50%;
  background-size: cover;

  ${color}
`;

const HeroGradientOverlay = styled.div`
  height: inherit;
  background: linear-gradient(#1879ca, rgb(24 121 202 / 0%));
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1142px;
  margin: 0 auto;
  padding: 0 calc(4px * 4);
`;

const HeroHeader = styled.h2`
  padding-top: calc(4px * 4);
  padding-bottom: 6px;
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
`;

const HeroList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-right: calc(4px * 4);
`;

const HeroListItem = styled.li`
  margin-right: calc(4px * 4);
  font-size: 20px;
  line-height: 28px;
  list-style: none;

  &::before {
    content: "";
    display: inline-block;
    width: calc(4px * 6);
    height: calc(4px * 5);
    margin-top: calc(4px * 3);
    margin-right: calc(4px * 2);
    background: url("${checkmarkIcon}");
    background-position: center;
    background-size: cover;
  }
`;

const HeroSearchContainer = styled.div`
  display: flex;
  position: relative;
  margin: calc(4px * 4) 0;
  padding: 4px;
  border-radius: calc(4px * 3);
  background: #ffb700;
  box-shadow: 0 calc(4px / 2) calc(4px * 3) rgb(0 0 0 / 16%);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(4px * 4);
    left: calc(4px * 5);
    width: calc(4px * 4);
    height: calc(4px * 4);
    margin-top: calc(4px * 3);
    margin-right: calc(4px * 2);
    background: url("${searchIcon}");
    background-position: center;
    background-size: cover;
  }
`;

const HeroSearchInput = styled.input`
  flex-grow: 1;
  height: 64px;
  margin-right: 4px;
  padding: calc(4px * 2);
  padding-left: 44px;
  border: none;
  border-radius: calc(4px * 2) calc(4px / 2) calc(4px / 2) calc(4px * 2);
  color: #1a1a1a;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &::placeholder {
    color: #949494;
  }

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
  font-family: "Avenir Next", BlinkMacSystemFont, -apple-system, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
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
    <HeroGradientOverlay>
      <HeaderFlexContainer>
        <HeroHeader>Car Hire – Search, Compare &amp; Save</HeroHeader>
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
    </HeroGradientOverlay>
  </StyledHero>
);

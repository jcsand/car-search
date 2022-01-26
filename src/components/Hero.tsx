/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";

import { Search } from "@components/Search";

import checkmarkIcon from "@assets/checkmark.svg";

// TODO: Import properly
const HERO_BACKGROUND_IMAGE =
  "https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg";

const StyledHero = styled.div<ColorProps>`
  height: min(calc(-268px + 100vh), 596px);
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

export const Hero: React.FC = () => (
  <StyledHero color="foreground" bg="background">
    <HeroGradientOverlay>
      <HeaderFlexContainer>
        <HeroHeader>Car Hire – Search, Compare &amp; Save</HeroHeader>
        <HeroList>
          <HeroListItem>Free cancellations on most bookings</HeroListItem>
          <HeroListItem>60,000+ locations</HeroListItem>
          <HeroListItem>Customer support in 40+ languages</HeroListItem>
        </HeroList>
        <Search />
      </HeaderFlexContainer>
    </HeroGradientOverlay>
  </StyledHero>
);

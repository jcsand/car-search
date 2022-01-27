/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import facepaint from "facepaint";

import { Search } from "@@components/Search";

import checkmarkIcon from "@@icons/checkmark.svg";

const mq = facepaint([
  // "@media(min-width: 480px)",
  // "@media(min-width: 576px)",
  // "@media(min-width: 768px)",
  "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

// TODO: Import properly
const HERO_BACKGROUND_IMAGE =
  "https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg";

const StyledHero = styled.div<ColorProps>`
  min-height: 290px;
  background-position: 50%;
  background-size: cover;

  ${color}
  ${css(
    mq({
      height: ["auto", "min(calc(-268px + 100vh), 596px)"],
      backgroundImage: ["none", `url(${HERO_BACKGROUND_IMAGE})`]
    })
  )}
`;

const HeroGradientOverlay = styled.div`
  height: inherit;
  background: linear-gradient(#1879ca, rgb(24 121 202 / 0%));
`;

const HeroFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1142px;
  margin: 0 auto;
  padding: 0 calc(4px * 4);
`;

const HeroHeader = styled.h2`
  font-weight: 700;

  ${css(
    mq({
      padding: ["calc(4px * 2) 0", "calc(4px * 4) 0 6px"],
      fontSize: ["32px", "40px"],
      lineHeight: ["40px", "52px"]
    })
  )}
`;

const HeroList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &::before {
    content: "";
    border-top: 1px solid #fff;
    width: 60%;
    margin-left: 15%;
    position: absolute;
    top: -16px;
  }

  ${css(
    mq({
      order: [1, 0],
      flexDirection: ["column", "row"],
      margin: ["44px auto 16px", "0"],
      paddingRight: ["0", "calc(4px * 4)"],
      "&::before": {
        display: ["block", "none"]
      }
    })
  )}
`;

const HeroListItem = styled.li`
  margin-right: calc(4px * 4);
  list-style: none;

  &::before {
    content: "";
    display: inline-block;
    margin-right: calc(4px * 2);
    background: url("${checkmarkIcon}");
    background-position: center;
    background-size: cover;
  }

  ${css(
    mq({
      fontSize: ["14px", "20px"],
      lineHeight: ["20px", "28px"],
      "&::before": {
        width: ["calc(4px * 5)", "calc(4px * 6)"],
        height: ["calc(4px * 3)", "calc(4px * 5)"],
        marginTop: ["calc(4px * 2.5)", "calc(4px * 3)"]
      }
    })
  )}
`;

export const Hero: React.FC = () => (
  <StyledHero color="foreground" bg="background">
    <HeroGradientOverlay>
      <HeroFlexContainer>
        <HeroHeader>Car Hire – Search, Compare &amp; Save</HeroHeader>
        <HeroList>
          <HeroListItem>Free cancellations on most bookings</HeroListItem>
          <HeroListItem>60,000+ locations</HeroListItem>
          <HeroListItem>Customer support in 40+ languages</HeroListItem>
        </HeroList>
        <Search />
      </HeroFlexContainer>
    </HeroGradientOverlay>
  </StyledHero>
);

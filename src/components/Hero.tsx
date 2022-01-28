/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { Search } from "@@components/Search";
import { mediaQuery, t } from "@@lib/helpers";

import checkmarkIcon from "@@icons/checkmark.svg";
import heroBackground from "@@images/background-large.jpg";

const mq = facepaint([
  // "@media(min-width: 480px)",
  // "@media(min-width: 576px)",
  // "@media(min-width: 768px)",
  "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const StyledHero = styled.div<ColorProps>`
  min-height: 290px;
  background-position: 50%;
  background-size: cover;

  ${color}
  ${mediaQuery(mq, {
    height: ["auto", "min(calc(-268px + 100vh), 596px)"],
    backgroundImage: ["none", `url(${heroBackground})`]
  })}
`;

const HeroGradientOverlay = styled.div`
  height: inherit;
  background: linear-gradient(
    ${t.color("background")},
    ${t.color("background", 0)}
  );
`;

const HeroFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1142px;
  margin: 0 auto;
  padding: 0 ${t.space(4)};
`;

const HeroHeader = styled.h2`
  font-weight: 700;

  ${mediaQuery(mq, (t) => ({
    padding: [`${t.space(2)} 0`, `${t.space(4)} 0 ${t.space(3, true)}`],
    fontSize: ["32px", "40px"],
    lineHeight: ["40px", "52px"]
  }))}
`;

const HeroList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &::before {
    content: "";
    border-top: 1px solid ${t.color("foreground")};
    width: 60%;
    margin-left: 15%;
    position: absolute;
    top: calc(-1 * ${t.space(4)});
  }

  ${mediaQuery(mq, (t) => ({
    order: [1, 0],
    flexDirection: ["column", "row"],
    margin: [`${t.space(10)} auto ${t.space(4)}`, "0"],
    paddingRight: ["0", `${t.space(4)}`],
    "&::before": {
      display: ["block", "none"]
    }
  }))}
`;

const HeroListItem = styled.li`
  margin-right: ${t.space(4)};
  list-style: none;

  &::before {
    content: "";
    display: inline-block;
    margin-right: ${t.space(2)};
    background: url("${checkmarkIcon}");
    background-position: center;
    background-size: cover;
  }

  ${mediaQuery(mq, (t) => ({
    fontSize: ["14px", "20px"],
    lineHeight: [t.space(5), t.space(7)],
    "&::before": {
      width: [t.space(5), t.space(6)],
      height: [t.space(3), t.space(5)],
      marginTop: [t.space(5, true), t.space(3)]
    }
  }))}
`;

export const Hero: React.FC = () => (
  <StyledHero color="foreground" bg="background">
    <HeroGradientOverlay>
      <HeroFlexContainer>
        <HeroHeader>Car Hire &ndash; Search, Compare &amp; Save</HeroHeader>
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

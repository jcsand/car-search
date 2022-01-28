/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { mediaQuery, t } from "@@lib/themeHelpers";

import checkmarkIcon from "@@icons/checkmark.svg";

const mq = mediaQuery(["l"]);

const HeroListElement = styled.ul`
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

  ${mq((t) => ({
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

  ${mq((t) => ({
    fontSize: ["14px", "20px"],
    lineHeight: [t.space(5), t.space(7)],
    "&::before": {
      width: [t.space(5), t.space(6)],
      height: [t.space(3), t.space(5)],
      marginTop: [t.space(5, true), t.space(3)]
    }
  }))}
`;

export const HeroList: React.FC = () => (
  <HeroListElement>
    <HeroListItem>Free cancellations on most bookings</HeroListItem>
    <HeroListItem>60,000+ locations</HeroListItem>
    <HeroListItem>Customer support in 40+ languages</HeroListItem>
  </HeroListElement>
);

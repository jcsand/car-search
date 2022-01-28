/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { Search } from "@@components/Search";
import { HeroList } from "@@components/HeroList";
import { mediaQuery, t } from "@@lib/themeHelpers";
import { breakpoints } from "@@lib/theme";

import heroBackground from "@@images/background-large.jpg";

const mq = mediaQuery(["l"]);

const HeroBackground = styled.div`
  min-height: 290px;
  color: ${t.color("foreground")};
  background-position: 50%;
  background-size: cover;
  background-color: ${t.color("background")};

  ${mq({
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

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${breakpoints.xl}px;
  margin: 0 auto;
  padding: 0 ${t.space(4)};
`;

const HeroHeader = styled.h2`
  font-weight: 700;

  ${mq((t) => ({
    padding: [`${t.space(2)} 0`, `${t.space(4)} 0 ${t.space(3, true)}`],
    fontSize: [t.fontSize(4), t.fontSize(5)],
    lineHeight: [t.lineHeight(5), t.lineHeight(6)]
  }))}
`;

export const Hero: React.FC = () => (
  <HeroBackground>
    <HeroGradientOverlay>
      <HeroContainer>
        <HeroHeader>Car Hire &ndash; Search, Compare &amp; Save</HeroHeader>
        <HeroList />
        <Search />
      </HeroContainer>
    </HeroGradientOverlay>
  </HeroBackground>
);

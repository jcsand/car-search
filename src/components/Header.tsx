/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { HeaderLogo } from "@@components/HeaderLogo";
import { HeaderManageBooking } from "@@components/HeaderManageBooking";
import { HeaderLanguage } from "@@components/HeaderLanguage";
import { HeaderMenu } from "@@components/HeaderMenu";
import { mediaQuery, t } from "@@lib/helpers";

const mq = facepaint([
  // "@media(min-width: 480px)",
  "@media(min-width: 576px)"
  // "@media(min-width: 768px)",
  // "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const HeaderBackground = styled.header`
  color: ${t.color("foreground")};
  background-color: ${t.color("background")};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1142px;
  height: ${t.space(12)};
  margin: 0 auto;
  padding-bottom: ${t.space(2)};
  padding-left: ${t.space(2)};

  ${mediaQuery(mq, {
    paddingRight: ["0", t.space(4)]
  })}
`;

export const Header: React.FC = () => (
  <HeaderBackground>
    <HeaderContainer>
      <HeaderLogo />
      <HeaderLanguage />
      <HeaderMenu />
      <HeaderManageBooking />
    </HeaderContainer>
  </HeaderBackground>
);

/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { HeaderLogo } from "@@components/HeaderLogo";
import { HeaderManageBooking } from "@@components/HeaderManageBooking";
import { HeaderLanguage } from "@@components/HeaderLanguage";
import { HeaderMenu } from "@@components/HeaderMenu";
import { t, mediaQuery } from "@@lib/themeHelpers";
import { breakpoints } from "@@lib/theme";

const mq = mediaQuery(["s"]);

const HeaderBackground = styled.header`
  color: ${t.color("foreground")};
  background-color: ${t.color("background")};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: ${breakpoints.xl}px;
  height: ${t.space(12)};
  margin: 0 auto;
  padding-bottom: ${t.space(2)};
  padding-left: ${t.space(2)};

  ${mq({
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

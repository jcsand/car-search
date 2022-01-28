/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { t } from "@@lib/helpers";

import rentalcarsLogo from "@@images/rc-logo-small--white.svg";

const LogoContainer = styled.div`
  flex-grow: 1;
`;

const LogoImage = styled.img`
  display: block;
  margin-left: ${t.space(2)};
  padding-top: ${t.space(3)};
  padding-bottom: ${t.space(3)};
  border-style: none;
`;

const LogoLink = styled.a`
  display: inline-block;
  margin-top: ${t.space(3, true)};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${t.color("foreground", 24 / 100)};
  }
`;

export const HeaderLogo: React.FC = () => (
  <LogoContainer>
    <LogoLink href="/">
      <LogoImage alt="Rentalcars.com Brand Logo" src={rentalcarsLogo} />
    </LogoLink>
  </LogoContainer>
);

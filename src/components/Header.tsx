/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { Box, Flex } from "reflexbox";

import { Button } from "@@components/Button";
import { t } from "@@lib/helpers";

import menuIcon from "@@icons/menu.svg";
import rentalcarsLogo from "@@images/rc-logo-small--white.svg";
import gbFlag from "@@images/gb.png";

const mq = facepaint([
  // "@media(min-width: 480px)",
  "@media(min-width: 576px)"
  // "@media(min-width: 768px)",
  // "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const StyledHeader = styled.header<ColorProps>`
  ${color}
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1142px;
  height: ${t.space(12)};
  margin: 0 auto;
  padding-bottom: ${t.space(2)};
  padding-left: ${t.space(2)};

  ${css(
    mq({
      paddingRight: ["0", t.space(4)]
    })
  )}
`;

const HeaderLogo = styled.img`
  display: block;
  margin-left: ${t.space(2)};
  padding-top: ${t.space(3)};
  padding-bottom: ${t.space(3)};
  border-style: none;
`;

const HeaderLogoLink = styled.a`
  display: inline-block;
  margin-top: ${t.space(3, true)};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${t.color("foreground", 24 / 100)};
  }
`;

const LanguageButton = styled(Button)`
  margin-left: ${t.space(2)};
  background: none;

  ${css(
    mq({
      display: ["none", "block"]
    })
  )}
`;

const LanguageFlagImage = styled.img`
  display: block;
  width: ${t.space(6)};
  height: ${t.space(6)};
  border-radius: 50%;
`;

const HeaderManageBookingButton = styled(Button)`
  min-height: 44px;
  padding: ${t.space(2)} ${t.space(4)};
  border-radius: ${t.space(1)};
  border-color: currentcolor;
  background-color: ${t.color("foreground")};
  color: ${t.color("lightBlue")};
  line-height: calc(${t.space(1)} + ${t.space(10, true)});
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${t.color("lightBlue", 1 / 16)};
    background-image: linear-gradient(
        ${t.color("lightBlue", 1 / 16)},
        ${t.color("lightBlue", 1 / 16)}
      ),
      linear-gradient(${t.color("foreground")}, ${t.color("foreground")});
  }

  ${css(
    mq({
      display: ["none", "block"]
    })
  )}
`;

const MenuButton = styled(Button)`
  margin-left: ${t.space(2)};
  background: none;

  ${css(
    mq({
      display: ["block", "none"]
    })
  )}
`;

const MenuImage = styled.img`
  display: block;
  width: ${t.space(5)};
  height: ${t.space(5)};
`;

export const Header: React.FC = () => (
  <StyledHeader color="foreground" bg="background">
    <HeaderFlexContainer>
      <Box flexGrow={1}>
        <HeaderLogoLink href="/">
          <HeaderLogo alt="Rentalcars.com Brand Logo" src={rentalcarsLogo} />
        </HeaderLogoLink>
      </Box>
      <Box>
        <Flex>
          <LanguageButton>GBP</LanguageButton>
          <LanguageButton>
            <LanguageFlagImage alt="English Language Icon" src={gbFlag} />
          </LanguageButton>
          <MenuButton>
            <MenuImage alt="Menu Icon" src={menuIcon} />
          </MenuButton>
        </Flex>
      </Box>
      <Box ml="calc(4px * 2)" pl="calc(4px * 2)">
        <HeaderManageBookingButton>Manage booking</HeaderManageBookingButton>
      </Box>
    </HeaderFlexContainer>
  </StyledHeader>
);

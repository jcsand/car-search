/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { Box, Flex } from "reflexbox";

import { Button } from "@@components/Button";
import menuIcon from "@@icons/menu.svg";

// TODO: think about importing these properly
const RENTAL_CARS_LOGO =
  "https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg";

const GBP_FLAG =
  "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png";

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
  height: 64px;
  margin: 0 auto;
  padding-bottom: calc(4px * 2);
  padding-left: calc(4px * 2);

  ${css(
    mq({
      paddingRight: ["0", "calc(4px * 4)"]
    })
  )}
`;

const HeaderLogo = styled.img`
  display: block;
  margin-left: calc(4px * 2);
  padding-top: calc(4px * 3);
  padding-bottom: calc(4px * 3);
  border-style: none;
`;

const LanguageButton = styled(Button)`
  margin-left: calc(4px * 2);
  background: none;

  ${css(
    mq({
      display: ["none", "block"]
    })
  )}
`;

const LanguageFlagImage = styled.img`
  display: block;
  width: calc(4px * 6);
  height: calc(4px * 6);
  border-radius: 50%;
`;

const HeaderManageBookingButton = styled(Button)`
  min-height: 44px;
  padding: calc(4px * 2) calc(4px * 4);
  border-radius: 4px;
  border-color: currentcolor;
  background-color: #fff;
  color: #1273c4;
  line-height: calc(4px + 44px / 2);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #1273c40f;
    background-image: linear-gradient(#1273c40f, #1273c40f),
      linear-gradient(#fff, #fff);
  }

  ${css(
    mq({
      display: ["none", "block"]
    })
  )}
`;

const MenuButton = styled(Button)`
  margin-left: calc(4px * 2);
  background: none;

  ${css(
    mq({
      display: ["block", "none"]
    })
  )}
`;

const MenuImage = styled.img`
  display: block;
  width: calc(4px * 5);
  height: calc(4px * 5);
`;

export const Header: React.FC = () => (
  <StyledHeader color="foreground" bg="background">
    <HeaderFlexContainer>
      <Box flexGrow={1}>
        <a href="/">
          <HeaderLogo alt="Rentalcars.com Brand Logo" src={RENTAL_CARS_LOGO} />
        </a>
      </Box>
      <Box>
        <Flex>
          <LanguageButton>GBP</LanguageButton>
          <LanguageButton>
            <LanguageFlagImage alt="English Language Icon" src={GBP_FLAG} />
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

// <div
//   data-testid="input-text-searchbox-toolbox-fts-end-slot"
//   class="bgui-c-input-text__side bgui-c-input-text__side--end"
// >
//   <span
//     data-testid="searchbox-toolbox-fts-input-loading-spinner"
//     class="bgui-c-spinner bgui-c-spinner--medium"
//   ></span>
// </div>;

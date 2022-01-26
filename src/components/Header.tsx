/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";

import { Button } from "@components/Button";

// TODO: think about importing these properly
const RENTAL_CARS_LOGO =
  "https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg";

const GBP_FLAG =
  "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png";

const StyledHeader = styled.header<ColorProps>`
  ${color}
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1142px;
  height: 64px;
  margin: 0 auto;
  padding-right: calc(4px * 4);
  padding-bottom: calc(4px * 2);
  padding-left: calc(4px * 2);
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
    background-color: rgb(#1273c4 / 6%);
    background-image: linear-gradient(rgb(#1273c4 / 6%), rgb(#1273c4 / 6%)),
      linear-gradient(#fff, #fff);
  }
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
        </Flex>
      </Box>
      <Box ml="calc(4px * 2)" pl="calc(4px * 2)">
        <HeaderManageBookingButton>Manage booking</HeaderManageBookingButton>
      </Box>
    </HeaderFlexContainer>
  </StyledHeader>
);

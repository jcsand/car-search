/** @jsxImportSource @emotion/react */
import React from "react";
import { color, ColorProps } from "styled-system";
import styled from "@emotion/styled";
import { Box } from "reflexbox";

const RENTAL_CARS_LOGO_SVG =
  "https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg";

const GBP_FLAG =
  "https://cf.bstatic.com/static/img/flags/new/48-squared/gb.png";

const StyledHeader = styled.header<ColorProps>`
  ${color}
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  max-width: 1142px;
  margin: 0 auto;
`;

export const Header = (): React.ReactElement => (
  <StyledHeader color="foreground" bg="background">
    <HeaderFlexContainer>
      <Box flexGrow={1}>
        <a href="/">
          <img alt="Rentalcars.com Brand Logo" src={RENTAL_CARS_LOGO_SVG} />
        </a>
      </Box>
      <Box>
        <div className="language">
          <button>GBP</button>
          <button>
            <img alt="" src={GBP_FLAG} />
          </button>
        </div>
      </Box>
      <Box>
        <button>Manage Booking</button>
      </Box>
    </HeaderFlexContainer>
  </StyledHeader>
);

/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/helpers";

import menuIcon from "@@icons/menu.svg";

const mq = facepaint([
  // "@media(min-width: 480px)",
  "@media(min-width: 576px)"
  // "@media(min-width: 768px)",
  // "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const MenuContainer = styled.div`
  margin-right: ${t.space(4)};

  ${mediaQuery(mq, {
    display: ["flex", "none"]
  })};
`;

const MenuButton = styled(Button)`
  margin-left: ${t.space(2)};
  background: none;
`;

const MenuImage = styled.img`
  display: block;
  width: ${t.space(5)};
  height: ${t.space(5)};
`;

export const HeaderMenu: React.FC = () => (
  <MenuContainer>
    <MenuButton>
      <MenuImage alt="Menu Icon" src={menuIcon} />
    </MenuButton>
  </MenuContainer>
);

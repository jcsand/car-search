/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/themeHelpers";

import menuIcon from "@@icons/menu.svg";

const mq = mediaQuery(["s"]);

const MenuContainer = styled.div`
  margin-right: ${t.space(4)};

  ${mq({
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

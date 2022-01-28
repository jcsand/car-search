/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/helpers";

const mq = facepaint([
  // "@media(min-width: 480px)",
  "@media(min-width: 576px)"
  // "@media(min-width: 768px)",
  // "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const ManageContainer = styled.div`
  margin-left: ${t.space(2)};
  margin-right: ${t.space(4)};
  padding-left: ${t.space(2)};

  ${mediaQuery(mq, {
    display: ["none", "block"]
  })}
`;

const ManageButton = styled(Button)`
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
`;

export const HeaderManageBooking: React.FC = () => (
  <ManageContainer>
    <ManageButton>Manage booking</ManageButton>
  </ManageContainer>
);

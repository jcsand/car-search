/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/themeHelpers";

const mq = mediaQuery(["s"]);

const ManageContainer = styled.div`
  margin-left: ${t.space(2)};
  margin-right: ${t.space(4)};
  padding-left: ${t.space(2)};

  ${mq({
    display: ["none", "block"]
  })}
`;

const ManageButton = styled(Button)`
  min-height: ${t.space(10)};
  padding: ${t.space(2)} ${t.space(4)};
  border-radius: ${t.space(1)};
  border-color: currentcolor;
  background-color: ${t.color("foreground")};
  color: ${t.color("lightBlue")};
  line-height: ${t.lineHeight(3)};
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

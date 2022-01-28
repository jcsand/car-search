/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import { t } from "@@lib/themeHelpers";

export const Button = styled.button`
  padding: ${t.space(2)};
  border: 1px solid transparent;
  color: ${t.color("foreground")};
  font-family: ${t.font("base")};
  font-size: 14px;
  line-height: ${t.space(3)};
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${t.color("foreground", 24 / 100)};
  }
`;

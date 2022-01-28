/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { t } from "@@lib/themeHelpers";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const spinAnimation = css`
  animation: ${spin} 1s linear infinite;
`;

export const LoadingSpinner = styled.span`
  display: block;
  position: absolute;
  top: calc(${t.space(5)} + 1px);
  right: ${t.space(4)};
  width: ${t.space(6)};
  height: ${t.space(6)};
  pointer-events: none;

  &::after {
    content: "";
    display: block;
    width: calc(${t.space(6)} - 2px);
    height: calc(${t.space(6)} - 2px);
    border: 2px solid ${t.color("lightGrey")};
    border-radius: 50%;
    border-right-color: ${t.color("lightBlue")};

    ${spinAnimation};
  }
`;

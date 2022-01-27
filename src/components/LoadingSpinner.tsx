/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

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
  top: 21px;
  right: 16px;
  width: 24px;
  height: 24px;
  pointer-events: none;

  &::after {
    content: "";
    display: block;
    width: calc(24px - 2px);
    height: calc(24px - 2px);
    border: 2px solid #e7e7e7;
    border-radius: 50%;
    border-right-color: #1273c4;

    ${spinAnimation};
  }
`;

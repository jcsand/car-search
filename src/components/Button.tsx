/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Button = styled.button`
  padding: calc(4px * 2);
  border: 1px solid transparent;
  color: #fff;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 12px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(255 255 255 / 24%);
  }
`;

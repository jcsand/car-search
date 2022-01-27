/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import facepaint from "facepaint";

import { Button } from "@@components/Button";
import { SearchLocation } from "@@components/SearchLocation";

const mq = facepaint([
  // "@media(min-width: 480px)",
  // "@media(min-width: 576px)",
  // "@media(min-width: 768px)",
  "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin: calc(4px * 4) 0;
  padding: 4px;
  border-radius: calc(4px * 3);
  background: #ffb700;
  box-shadow: 0 calc(4px / 2) calc(4px * 3) rgb(0 0 0 / 16%);

  ${css(
    mq({
      flexDirection: ["column", "row"]
    })
  )}
`;

const SearchButton = styled(Button)`
  height: 64px;
  padding: calc(4px * 2) calc(4px * 4);
  border-radius: calc(4px / 2) calc(4px * 2) calc(4px * 2) calc(4px / 2);
  background-color: #068323;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;

  &:focus,
  &:hover {
    background-color: #0d6521;
  }

  &:focus {
    outline-style: none;
    box-shadow: 0 0 0 3px rgb(18 115 196 / 24%);
  }

  ${css(
    mq({
      borderRadius: [
        "calc(4px / 2) calc(4px / 2) calc(4px * 2) calc(4px * 2)",
        "calc(4px / 2) calc(4px * 2) calc(4px * 2) calc(4px / 2)"
      ]
    })
  )}
`;

export const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchLocation />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

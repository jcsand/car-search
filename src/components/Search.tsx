/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { Button } from "@@components/Button";
import { SearchLocation } from "@@components/SearchLocation";
import { mediaQuery, t } from "@@lib/themeHelpers";

const mq = mediaQuery(["l"]);

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin: ${t.space(4)} 0;
  padding: ${t.space(1)};
  border-radius: ${t.space(3)};
  background: ${t.color("lightOrange")};
  box-shadow: 0 ${t.space(1, true)} ${t.space(3)} ${t.color("black", 16 / 100)};

  ${mq({
    flexDirection: ["column", "row"]
  })}
`;

const SearchButton = styled(Button)`
  height: ${t.space(12)};
  padding: ${t.space(2)} ${t.space(4)};
  background-color: ${t.color("green")};
  font-size: ${t.fontSize(3)};
  font-weight: 700;
  line-height: ${t.lineHeight(4)};

  &:focus,
  &:hover {
    background-color: ${t.color("darkGreen")};
  }

  &:focus {
    outline-style: none;
    box-shadow: 0 0 0 3px ${t.color("lightBlue", 24 / 100)};
  }

  ${mq((t) => ({
    borderRadius: [
      `${t.space(2, true)} ${t.space(2, true)} ${t.space(2)} ${t.space(2)}`,
      `${t.space(2, true)} ${t.space(2)} ${t.space(2)} ${t.space(2, true)}`
    ]
  }))}
`;

export const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchLocation />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

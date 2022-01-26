/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "@components/Button";
import { Suggestions } from "@components/Suggestions";

import searchIcon from "@assets/search.svg";

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin: calc(4px * 4) 0;
  padding: 4px;
  border-radius: calc(4px * 3);
  background: #ffb700;
  box-shadow: 0 calc(4px / 2) calc(4px * 3) rgb(0 0 0 / 16%);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: calc(4px * 4);
    left: calc(4px * 5);
    width: calc(4px * 4);
    height: calc(4px * 4);
    margin-top: calc(4px * 3);
    margin-right: calc(4px * 2);
    background: url("${searchIcon}");
    background-position: center;
    background-size: cover;
  }
`;

const HeroSearchInput = styled.input`
  width: 100%;
  height: 64px;
  padding: calc(4px * 2);
  padding-left: 44px;
  border: none;
  border-radius: calc(4px * 2) calc(4px / 2) calc(4px / 2) calc(4px * 2);
  color: #1a1a1a;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:focus {
    outline-style: none;
    box-shadow: 0 0 0 3px rgb(18 115 196 / 24%);
  }

  &::placeholder {
    color: #949494;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 4px;
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
`;

export const Search: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <SearchContainer>
      <SearchInputContainer>
        <HeroSearchInput
          placeholder="Pick-up Location"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        {value ? <Suggestions /> : <></>}
      </SearchInputContainer>
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

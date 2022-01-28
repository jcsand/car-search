/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { LoadingSpinner } from "@@components/LoadingSpinner";
import { Suggestions } from "@@components/Suggestions";
import { SearchState } from "@@hooks/useSearch";
import { mediaQuery, t } from "@@lib/helpers";

import searchIcon from "@@icons/search.svg";

// TODO: constant/config
const MIN_SEARCH = 2;
const MAX_SUGGESTIONS = 6;

const mq = facepaint([
  // "@media(min-width: 480px)",
  // "@media(min-width: 576px)",
  // "@media(min-width: 768px)",
  "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const SearchInputElement = styled.input`
  width: 100%;
  height: ${t.space(12)};
  padding: ${t.space(2)};
  padding-left: ${t.space(10)};
  border: none;
  color: ${t.color("lightBlack")};
  font-family: ${({ theme }) => theme.fonts.os};
  font-size: 16px;
  font-weight: 500;
  line-height: ${t.space(6)};

  &:focus {
    outline-style: none;
    box-shadow: 0 0 0 3px ${t.color("lightBlue", 24 / 100)};
  }

  &::placeholder {
    color: ${t.color("grey")};
  }

  ${mediaQuery(mq, (t) => ({
    borderRadius: [
      `${t.space(2)} ${t.space(2)} ${t.space(1, true)} ${t.space(1, true)}`,
      `${t.space(2)} ${t.space(1, true)} ${t.space(1, true)} ${t.space(2)}`
    ]
  }))}
`;

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: ${t.space(3)};
    left: ${t.space(4)};
    width: ${t.space(4)};
    height: ${t.space(4)};
    margin-top: ${t.space(3)};
    margin-right: ${t.space(2)};
    background: url("${searchIcon}");
    background-position: center;
    background-size: cover;
    pointer-events: none;
  }

  ${mediaQuery(mq, (t) => ({
    margin: [`0 0 ${t.space(1)} 0`, `0 ${t.space(1)} 0 0`]
  }))}
`;

interface SearchInputProps {
  initialValue?: string;
  searchState: SearchState;
  onChange: (value: string, skipSearch?: boolean) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  initialValue = "",
  searchState,
  onChange
}) => {
  const [value, setValue] = useState(initialValue);
  const [forceHide, setForceHide] = useState(false);
  const [activeItem, setActiveItem] = useState<number>(-1);

  const showSuggestions = !forceHide && value.length >= MIN_SEARCH;
  const showSpinner =
    showSuggestions && !searchState.data && !searchState.error;

  const onSelect = (i: number, value: string) => {
    setForceHide(true);
    setValue(value);
    setActiveItem(i);
    onChange(value, true);
  };

  return (
    <SearchInputContainer>
      <SearchInputElement
        aria-label="Pick-up Location"
        aria-activedescendant={
          activeItem > -1 ? `search-suggestion-item-${activeItem}` : undefined
        }
        placeholder="Pick-up Location"
        value={value}
        onChange={({ target: { value } }) => {
          setForceHide(false);
          setValue(value);
          onChange(value, false);
        }}
        onKeyDown={({ key }) => {
          if (!showSuggestions || !searchState?.data) {
            return;
          }

          if (["ArrowUp", "ArrowDown"].includes(key)) {
            const direction = key === "ArrowDown" ? 1 : -1;
            const newState =
              Math.max(-1, activeItem + direction) % MAX_SUGGESTIONS;
            setActiveItem(newState);
          } else if (key === "Enter") {
            const { searchText } = searchState.data[activeItem];
            onSelect(activeItem, searchText);
          }
        }}
      />
      {showSpinner ? <LoadingSpinner /> : null}
      {showSuggestions ? (
        <Suggestions
          searchState={searchState}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          onSelect={onSelect}
        />
      ) : null}
    </SearchInputContainer>
  );
};

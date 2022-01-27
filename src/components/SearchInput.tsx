/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import facepaint from "facepaint";

import { LoadingSpinner } from "@@components/LoadingSpinner";
import { Suggestions } from "@@components/Suggestions";
import { SearchState } from "@@hooks/useSearch";

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
  height: 64px;
  padding: calc(4px * 2);
  padding-left: 44px;
  border: none;
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

  ${css(
    mq({
      borderRadius: [
        "calc(4px * 2) calc(4px * 2) calc(4px / 2) calc(4px / 2)",
        "calc(4px * 2) calc(4px / 2) calc(4px / 2) calc(4px * 2)"
      ]
    })
  )}
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
    top: calc(4px * 3);
    left: calc(4px * 4);
    width: calc(4px * 4);
    height: calc(4px * 4);
    margin-top: calc(4px * 3);
    margin-right: calc(4px * 2);
    background: url("${searchIcon}");
    background-position: center;
    background-size: cover;
    pointer-events: none;
  }

  ${css(
    mq({
      margin: ["0 0 4px 0", "0 4px 0 0"]
    })
  )}
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

/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

import type { SearchState } from "@@hooks/useSearch";
import { Suggestion } from "@@components/Suggestion";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn} 0.5s;
`;

const SuggestionsContainer = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  border: none;
  border-radius: 4px;
  border-color: #1a1a1a;
  background: #fff;
  box-shadow: 0 calc(4px / 2) calc(4px * 2) rgb(0 0 0 / 16%);
  color: #1a1a1a;

  ${fadeInAnimation}
`;

interface SuggestionsProps {
  searchState?: SearchState;
  activeItem?: number;
  setActiveItem: (newValue: number) => void;
  onSelect: (index: number, newValue: string) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  searchState,
  activeItem,
  setActiveItem,
  onSelect
}) => {
  if (!searchState?.data || searchState.error) {
    return null;
  }

  return (
    <SuggestionsContainer role="listbox">
      {searchState.data.map((suggestion, i) => (
        <Suggestion
          key={i}
          id={`search-suggestion-item-${i}`}
          suggestion={suggestion}
          active={activeItem === i}
          setActive={() => setActiveItem(i)}
          onClick={(value) => onSelect(i, value)}
        />
      ))}
    </SuggestionsContainer>
  );
};

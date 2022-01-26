/** @jsxImportSource @emotion/react */
import type { SearchState } from "../hooks/useSearch";

import React from "react";
import styled from "@emotion/styled";

const PLACE_TYPE_MAP: Record<string, string> = {
  A: "Airport",
  C: "City",
  D: "District",
  T: "Station"
};

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
`;

const Suggestion = styled.li`
  display: flex;
  align-items: center;
  padding: calc(4px * 3);
  cursor: pointer;

  &:hover,
  [aria-selected="true"] {
    background: rgb(18 115 196 / 6%);
  }
`;

// TODO: hmmm span
const SuggestionBadge = styled.span`
  display: inline-block;
  min-width: 5.1rem;
  padding: 0.3rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;

  &.city,
  &.station {
    background: #0071c2;
  }

  &.district {
    background: #008009;
  }

  &.airport {
    background: #ff8000;
    color: #262626;
  }
`;

const SuggestionContent = styled.div`
  padding-left: calc(4px * 3);
`;

const SuggestionTitle = styled.p`
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const SuggestionSubtext = styled.p`
  color: #474747;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
interface SuggestionsProps {
  searchState?: SearchState;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ searchState }) => {
  if (!searchState?.data || searchState.error) {
    return null;
  }

  return (
    <SuggestionsContainer role="listbox">
      {searchState.data.map((suggestion, i) => {
        const badge = PLACE_TYPE_MAP[suggestion.placeType];
        const subtext = [suggestion.city, suggestion.region, suggestion.country]
          .filter((a) => a)
          .join(", ");

        return (
          <Suggestion key={i}>
            <SuggestionBadge className={badge?.toLowerCase()}>
              {badge || suggestion.placeType}
            </SuggestionBadge>
            <SuggestionContent>
              <SuggestionTitle>{suggestion.name}</SuggestionTitle>
              <SuggestionSubtext>{subtext}</SuggestionSubtext>
            </SuggestionContent>
          </Suggestion>
        );
      }) || <Suggestion>No results found.</Suggestion>}
    </SuggestionsContainer>
  );
};

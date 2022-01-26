/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

// TODO: animation: fadeIn 0.5s;
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

// TODO: is span right?
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

const TEST_DATA = [
  {
    badge: "Airport",
    title: "Manchester Airport (MAN)",
    subtext: "Manchester, Greater Manchester, United Kingdom"
  },
  {
    badge: "City",
    title: "Manchester",
    subtext: "Greater Manchester, United Kingdom"
  },
  {
    badge: "Station",
    title: "Manchester - Piccadilly Train Station",
    subtext: "Manchester, England, United Kingdom"
  },
  {
    badge: "City",
    title: "Oldham",
    subtext: "Greater Manchester, United Kingdom"
  },
  {
    badge: "City",
    title: "Bolton",
    subtext: "Greater Manchester, United Kingdom"
  },
  {
    badge: "City",
    title: "Stockport",
    subtext: "Greater Manchester, United Kingdom"
  }
];

export const Suggestions: React.FC = () => {
  const suggestions = TEST_DATA;

  return (
    <SuggestionsContainer>
      {suggestions.map(({ badge, title, subtext }) => (
        <Suggestion>
          <SuggestionBadge className={badge.toLowerCase()}>
            {badge}
          </SuggestionBadge>
          <SuggestionContent>
            <SuggestionTitle>{title}</SuggestionTitle>
            <SuggestionSubtext>{subtext}</SuggestionSubtext>
          </SuggestionContent>
        </Suggestion>
      )) || <Suggestion>No results found.</Suggestion>}
    </SuggestionsContainer>
  );
};

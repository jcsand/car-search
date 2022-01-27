/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import type { HydratedSearchResult } from "@@hooks/useSearch";
import { SuggestionBadge } from "@@components/SuggestionBadge";

const SuggestionContainer = styled.li`
  display: flex;
  align-items: center;
  padding: calc(4px * 3);
  cursor: pointer;

  &:hover,
  &[aria-selected="true"] {
    background: rgb(18 115 196 / 6%);
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

interface SuggestionProps {
  suggestion: HydratedSearchResult;
  active?: boolean;
  id?: string;
  setActive: () => void;
  onClick: (newValue: string) => void;
}

export const Suggestion: React.FC<SuggestionProps> = ({
  suggestion,
  active = false,
  id,
  setActive,
  onClick
}) => {
  return (
    <SuggestionContainer
      aria-selected={active}
      role="option"
      id={id}
      onClick={() => onClick(suggestion.searchText)}
      onMouseOver={() => setActive()}
    >
      <SuggestionBadge placeType={suggestion.placeType} />
      <SuggestionContent>
        <SuggestionTitle>{suggestion.titleText}</SuggestionTitle>
        <SuggestionSubtext>{suggestion.subtitleText}</SuggestionSubtext>
      </SuggestionContent>
    </SuggestionContainer>
  );
};

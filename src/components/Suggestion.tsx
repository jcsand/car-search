/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import type { HydratedSearchResult } from "@@hooks/useSearch";
import { SuggestionBadge } from "@@components/SuggestionBadge";
import { t } from "@@lib/helpers";

const SuggestionContainer = styled.li`
  display: flex;
  align-items: center;
  padding: ${t.space(3)};
  cursor: pointer;

  &:hover,
  &[aria-selected="true"] {
    background: ${t.color("lightBlue", 6 / 100)};
  }
`;

const SuggestionContent = styled.div`
  padding-left: ${t.space(3)};
`;

const SuggestionTitle = styled.p`
  font-family: ${t.font("os")};
  font-size: 14px;
  font-weight: 400;
  line-height: ${t.space(5)};
`;

const SuggestionSubtext = styled.p`
  color: ${t.color("darkGrey")};
  font-family: ${t.font("os")};
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

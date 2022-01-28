/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { t } from "@@lib/themeHelpers";

const PLACE_TYPE_MAP: Record<string, string> = {
  A: "Airport",
  C: "City",
  D: "District",
  F: "Region",
  G: "Area",
  I: "Region",
  P: "Region",
  T: "Station",
  W: "Country",
  Z: "Place"
};

type PlaceTypeMap = typeof PLACE_TYPE_MAP;
type PlaceTypeCode = keyof PlaceTypeMap;
type PlaceTypeName = PlaceTypeMap[keyof PlaceTypeMap];

const COLOURS = [
  ["City", "Station"],
  ["Place", "Area"]
].reduce(
  (colours, [key, newKey]) => ({
    ...colours,
    [newKey]: colours[key]
  }),
  {
    Airport: css`
      background: #ff8000;
      color: #262626;
    `,
    City: css`
      background: #0071c2;
    `,
    Country: css`
      background: #116d8a;
    `,
    District: css`
      background: #008009;
    `,
    Place: css`
      border-color: #262626;
      background: #262626;
    `,
    Region: css`
      border-color: #f1c74c;
      background: #f1c74c;
      color: #222;
    `
  } as Record<PlaceTypeName, SerializedStyles>
);

const SuggestionBadgeElement = styled.span`
  display: inline-block;
  min-width: 5.1rem;
  padding: 0.3rem 0;
  border: none;
  border-radius: ${t.space(1)};
  color: ${t.color("foreground")};
  font-size: ${t.fontSize(1)};
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
`;

interface SuggestionBadgeProps {
  placeType: PlaceTypeCode;
}

export const SuggestionBadge: React.FC<SuggestionBadgeProps> = ({
  placeType
}) => {
  const badge = PLACE_TYPE_MAP[placeType];
  const badgeCss = COLOURS[badge];

  return (
    <SuggestionBadgeElement css={badgeCss}>{badge}</SuggestionBadgeElement>
  );
};

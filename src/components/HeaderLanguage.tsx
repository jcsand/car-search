/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import facepaint from "facepaint";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/helpers";

import gbFlag from "@@images/gb.png";

const mq = facepaint([
  // "@media(min-width: 480px)",
  "@media(min-width: 576px)"
  // "@media(min-width: 768px)",
  // "@media(min-width: 1024px)"
  // "@media(only screen and (min-width: 1024px))"
]);

const LanguageContainer = styled.div`
  ${mediaQuery(mq, {
    display: ["none", "flex"]
  })}
`;

const LanguageButton = styled(Button)`
  margin-left: ${t.space(2)};
  background: none;
`;

const LanguageFlagImage = styled.img`
  display: block;
  width: ${t.space(6)};
  height: ${t.space(6)};
  border-radius: 50%;
`;

export const HeaderLanguage: React.FC = () => (
  <LanguageContainer>
    <LanguageButton>GBP</LanguageButton>
    <LanguageButton>
      <LanguageFlagImage alt="English Language Icon" src={gbFlag} />
    </LanguageButton>
  </LanguageContainer>
);

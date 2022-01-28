/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

import { Button } from "@@components/Button";
import { mediaQuery, t } from "@@lib/themeHelpers";

import gbFlag from "@@images/gb.png";

const mq = mediaQuery(["s"]);

const LanguageContainer = styled.div`
  ${mq({
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

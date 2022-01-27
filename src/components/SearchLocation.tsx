/** @jsxImportSource @emotion/react */
import React from "react";
import { SearchInput } from "@@components/SearchInput";
import { useSearch } from "@@hooks/useSearch";

export const SearchLocation: React.FC = () => {
  const [searchState, setQuery] = useSearch("");

  return (
    <SearchInput
      searchState={searchState}
      onChange={(value, skipSearch) => {
        if (!skipSearch) {
          setQuery(value);
        }
      }}
    />
  );
};

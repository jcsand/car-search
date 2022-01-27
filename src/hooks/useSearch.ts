import React, { useEffect, useReducer, useRef, useState } from "react";
import fetch from "cross-fetch";

export interface SearchResult {
  country: string;
  lng: number;
  city: string;
  searchType: string;
  alternative: string[];
  index: number;
  bookingId: string;
  placeType: string;
  placeKey: string;
  iata: string;
  countryIso: string;
  locationId: string;
  name: string;
  ufi: number;
  isPopular: boolean;
  region: string;
  lang: string;
  lat: number;
}

export interface HydratedSearchResult extends SearchResult {
  titleText: string;
  subtitleText: string;
  searchText: string;
}
export interface SearchResults {
  results: {
    isGooglePowered: boolean;
    docs: SearchResult[];
    numfound: number;
  };
}

export interface SearchState {
  data?: HydratedSearchResult[];
  error?: Error;
}

type Cache = { [url: string]: HydratedSearchResult[] };

type SearchAction =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "fetched"; payload: HydratedSearchResult[] }
  | { type: "error"; payload: Error };

export const BASE_URL = "https://www.rentalcars.com/FTSAutocomplete.do";

export const buildSearchUrl = (query: string, results = 6): string =>
  `${BASE_URL}?${new URLSearchParams({
    solrIndex: "fts_en",
    solrRows: `${results}`,
    solrTerm: query
  })}`;

const hydrateResult = (result: SearchResult): HydratedSearchResult => {
  const titleText = `${result.name}${
    result.placeType === "A" ? ` (${result.iata})` : ""
  }`;

  const subtitleText = [result.city, result.region, result.country]
    .filter((a) => a)
    .join(", ");

  const searchText = `${titleText}, ${result.city || result.region}, ${
    result.country
  }`;

  return {
    ...result,
    titleText,
    subtitleText,
    searchText
  };
};

export const useSearch = (
  initialQuery = "",
  options?: RequestInit
): [SearchState, React.Dispatch<string>] => {
  const cache = useRef<Cache>({});
  const cancelRequest = useRef<boolean>(false);
  const [query, setQuery] = useState(initialQuery);

  const initialState: SearchState = {
    error: undefined,
    data: undefined
  };

  const fetchReducer = (
    state: SearchState,
    action: SearchAction
  ): SearchState => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!query || query.length < 2) {
      return;
    }

    const fetchData = async () => {
      cancelRequest.current = false;
      dispatch({ type: "loading" });

      const url = buildSearchUrl(query);
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as SearchResults;
        const {
          results: { docs }
        } = data;
        cache.current[url] = docs.map(hydrateResult);
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: "fetched", payload: cache.current[url] });
      } catch (ex) {
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: "error", payload: ex as Error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [query]);

  return [state, setQuery];
};

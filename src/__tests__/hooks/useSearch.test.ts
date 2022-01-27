import { act, renderHook } from "@testing-library/react-hooks";
import { mockRequests, delay } from "../__helpers__";
import {
  useSearch,
  buildSearchUrl,
  BASE_URL,
  HydratedSearchResult
} from "@@hooks/useSearch";

describe("buildSearchUrl", () => {
  it("correctly builds a search URL", () => {
    const expectedSearchQuery = "foo bar";
    const expectedResult = `${BASE_URL}?solrIndex=fts_en&solrRows=6&solrTerm=foo+bar`;
    const result = buildSearchUrl(expectedSearchQuery);

    expect(result).toBe(expectedResult);
  });
});

describe("useSearch Hook", () => {
  mockRequests();

  it("Returns results for a successful query", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearch("manchester")
    );

    await waitForNextUpdate();

    expect(result.current[0].data?.length).toBe(6);
  });

  it('Returns "No results found" for an unsuccessful query', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearch("asdf1234")
    );

    await waitForNextUpdate();

    expect(result.current[0].data?.length).toBe(1);

    const firstResult = result.current[0].data?.shift();
    expect(firstResult?.name).toBe("No results found");
  });

  it("returns and error if the request is not successful", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearch("invalid-request")
    );

    await waitForNextUpdate();

    expect(result.current[0].error).toBeInstanceOf(Error);
    expect(result.current[0].error).toMatchObject({
      message: "Not Found"
    });
  });

  it("does not make a request without a query", async () => {
    const { result } = renderHook(() => useSearch(""));

    await delay(500);

    expect(result.current[0].data).toBeUndefined();
  });

  it("does not make a request with less than 2 characters", async () => {
    const { result } = renderHook(() => useSearch("m"));

    await delay(500);

    expect(result.current[0].data).toBeUndefined();
  });

  it("makes a request when queried via dispatch function", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch(""));

    await delay(500);

    expect(result.current[0].data).toBeUndefined();

    act(() => {
      result.current[1]("manchester");
    });

    await waitForNextUpdate();
    expect(result.current[0].data?.length).toBe(6);
  });

  it("hydrates results of a successful query", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearch("manchester")
    );

    await waitForNextUpdate();

    const [firstResult] = result?.current[0]?.data as HydratedSearchResult[];
    expect(firstResult).toMatchObject({
      searchText: "Manchester Airport (MAN), Manchester, United Kingdom",
      subtitleText: "Manchester, Greater Manchester, United Kingdom",
      titleText: "Manchester Airport (MAN)"
    });
  });
});

import { renderHook } from "@testing-library/react-hooks";
import { mockRequests } from "../__helpers__";
import { useSearch, buildSearchUrl, BASE_URL } from "@@hooks/useSearch";

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

  // TODO: no query does nothing
  // TODO: less than 2 chars does nothing
  // TODO: test cache doesn't make request
});

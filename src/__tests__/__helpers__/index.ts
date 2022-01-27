import fs from "fs";
import { join } from "path";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { SearchResults, BASE_URL } from "@@hooks/useSearch";

export * from "./react-helpers";

export const loadFixtures = <T>(
  prefix: string,
  fixtureNames: string[]
): Record<string, T> =>
  fixtureNames.reduce(
    (fixtures, name) => ({
      ...fixtures,
      [name]: JSON.parse(
        fs.readFileSync(
          join(__dirname, `../__fixtures__/${prefix}-${name}.json`),
          "utf-8"
        )
      )
    }),
    {} as Record<string, T>
  );

const HANDLER_FIXTURES = loadFixtures<SearchResults>("search", [
  "manchester",
  "asdf1234"
]);

export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    const term = req.url.searchParams.get("solrTerm");
    const fixtures = HANDLER_FIXTURES;

    if (!term || !fixtures[term]) {
      return res(ctx.status(404), ctx.json({ error: "not found" }));
    }

    return res(ctx.json(fixtures[term]));
  })
];

export const mockRequests = () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};

export const delay = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time));

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockRequests } from "../__helpers__";
import { Header } from "@@components/Header";

describe("Header component", () => {
  mockRequests();

  it("renders matching snapshot", async () => {
    const rendered = render(<Header />);
    expect(rendered.baseElement).toMatchSnapshot();
  });
});

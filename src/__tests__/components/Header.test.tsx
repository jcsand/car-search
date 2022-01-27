import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "@@components/Header";

describe("Header component", () => {
  it("renders matching snapshot", async () => {
    const rendered = render(<Header />);
    expect(rendered.baseElement).toMatchSnapshot();
  });
});

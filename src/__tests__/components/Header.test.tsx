import React from "react";
import "@testing-library/jest-dom";
import { Header } from "@@components/Header";
import { renderWithTheme } from "../__helpers__";

describe("Header component", () => {
  it("renders matching snapshot", async () => {
    const rendered = renderWithTheme(<Header />);
    expect(rendered.baseElement).toMatchSnapshot();
  });
});

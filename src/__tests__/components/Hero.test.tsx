import React from "react";
import { waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@@components/Hero";
import { renderWithTheme } from "../__helpers__";

describe("Hero component", () => {
  it("renders matching snapshot", async () => {
    const rendered = renderWithTheme(<Hero />);
    expect(rendered.baseElement).toMatchSnapshot();
  });

  it("has heading", async () => {
    renderWithTheme(<Hero />);

    const element = await waitFor(() => screen.getByRole("heading"));

    expect(element).toHaveTextContent("Car Hire – Search, Compare & Save");
  });

  it("has USP list", async () => {
    renderWithTheme(<Hero />);

    const element = await waitFor(() =>
      screen.getByText("Free cancellations on most bookings")
    );

    expect(element).toBeInstanceOf(HTMLLIElement);
  });
});

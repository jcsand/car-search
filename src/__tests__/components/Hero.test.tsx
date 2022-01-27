import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@@components/Hero";

describe("Hero component", () => {
  it("renders matching snapshot", async () => {
    const rendered = render(<Hero />);
    expect(rendered.baseElement).toMatchSnapshot();
  });

  it("has heading", async () => {
    render(<Hero />);

    const element = await waitFor(() => screen.getByRole("heading"));

    expect(element).toHaveTextContent("Car Hire – Search, Compare & Save");
  });

  it("has USP list", async () => {
    render(<Hero />);

    const element = await waitFor(() =>
      screen.getByText("Free cancellations on most bookings")
    );

    expect(element).toBeInstanceOf(HTMLLIElement);
  });
});

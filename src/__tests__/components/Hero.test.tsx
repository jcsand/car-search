import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockRequests } from "../__helpers__";
import { App } from "@@components/App";

describe("Hero component", () => {
  mockRequests();

  it("has heading", async () => {
    render(<App />);

    await waitFor(() => screen.getByRole("heading"));

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Car Hire – Search, Compare & Save"
    );
  });

  it("has USP list", async () => {
    render(<App />);

    const element = await waitFor(() =>
      screen.getByText("Free cancellations on most bookings")
    );

    expect(element).toBeInstanceOf(HTMLLIElement);
  });
});

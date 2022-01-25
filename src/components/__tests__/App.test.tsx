import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../App";

describe("App component", () => {
  it("loads initial view", async () => {
    render(<App />);

    await waitFor(() => screen.getByRole("heading"));

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Car Hire — Search, Compare & Save"
    );
  });
});

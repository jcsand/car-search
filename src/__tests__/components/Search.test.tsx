import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { getAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { mockRequests } from "../__helpers__";
import { App } from "@@components/App";

describe("Search component", () => {
  mockRequests();

  it("replaces search query on suggestion click", async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: "manchester" } });
    await waitFor(() => screen.getByRole("listbox"));

    const firstSuggestion = screen.getByRole("listbox").children[0];
    await fireEvent.click(firstSuggestion, new MouseEvent("click"));

    const expectedValue =
      "Manchester Airport (MAN), Manchester, United Kingdom";
    await waitFor(() => screen.getByDisplayValue(expectedValue));

    expect(searchInput).toHaveValue(expectedValue);
  });

  it("navigates the search suggestions when using arrow keys", async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    const searchInput = await waitFor(() =>
      screen.getByLabelText(expectedPlaceholder)
    );

    await fireEvent.change(searchInput, { target: { value: "manchester" } });
    const suggestions = await waitFor(() => screen.getByRole("listbox"));
    const options = getAllByRole(suggestions, "option");

    await fireEvent.keyDown(searchInput, { key: "ArrowDown" });
    await waitFor(() => {
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    await fireEvent.keyDown(searchInput, { key: "ArrowDown" });
    await waitFor(() =>
      expect(options[1]).toHaveAttribute("aria-selected", "true")
    );
    expect(options[0]).toHaveAttribute("aria-selected", "false");

    await fireEvent.keyDown(searchInput, { key: "ArrowUp" });
    await waitFor(() =>
      expect(options[0]).toHaveAttribute("aria-selected", "true")
    );
    expect(options[1]).toHaveAttribute("aria-selected", "false");

    await fireEvent.keyDown(searchInput, { key: "ArrowUp" });
    await waitFor(() =>
      expect(options[0]).toHaveAttribute("aria-selected", "false")
    );
    expect(options[1]).toHaveAttribute("aria-selected", "false");
  });

  it("should select the currently selected suggestion on enter press", async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    const searchInput = await waitFor(() =>
      screen.getByLabelText(expectedPlaceholder)
    );

    await fireEvent.change(searchInput, { target: { value: "manchester" } });
    const suggestions = await waitFor(() => screen.getByRole("listbox"));
    const options = getAllByRole(suggestions, "option");

    await fireEvent.keyDown(searchInput, { key: "ArrowDown" });
    await waitFor(() => {
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    await fireEvent.keyDown(searchInput, { key: "Enter" });
    await waitFor(() => expect(() => screen.getByRole("listbox")).toThrow());

    const expectedValue =
      "Manchester Airport (MAN), Manchester, United Kingdom";
    expect(searchInput).toHaveValue(expectedValue);
  });
});

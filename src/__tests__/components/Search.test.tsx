import React from "react";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import { getAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { mockRequests, renderWithTheme } from "../__helpers__";
import { Search } from "@@components/Search";

describe("Search component", () => {
  const expectedPlaceholder = "Pick-up Location";

  mockRequests();

  it("renders matching snapshot", async () => {
    const rendered = renderWithTheme(<Search />);
    expect(rendered.baseElement).toMatchSnapshot();
  });

  it("renders with results matching snapshot", async () => {
    const rendered = renderWithTheme(<Search />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: "manchester" } });
    await waitFor(() => screen.getByRole("listbox"));

    expect(rendered.baseElement).toMatchSnapshot();
  });

  it("replaces search query on suggestion click", async () => {
    renderWithTheme(<Search />);

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
    renderWithTheme(<Search />);

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
    renderWithTheme(<Search />);

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

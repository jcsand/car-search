import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../App";

describe("App Spec", () => {
  it("loads initial hero", async () => {
    render(<App />);

    await waitFor(() => screen.getByRole("heading"));

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Car Hire – Search, Compare & Save"
    );
  });

  it("has a search input labelled 'Pick-up Location'", async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));

    expect(screen.getByLabelText(expectedPlaceholder)).toBeInstanceOf(HTMLInputElement);
  });

  it('hides placeholder text once a character is inputted', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'a' } });

    expect(screen.getByLabelText(expectedPlaceholder)).not.toHaveTextContent('Pick-up Location');
  });

  it('does not show results for a single search character', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'm' } });

    expect(() => screen.getByRole('listbox')).toThrow();
  });

  // TODO: verify-it, setup remote mock
  it('shows results for a two or more search characters', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'ma' } });

    expect(screen.getByRole('listbox').children[0]).toBeInstanceOf(HTMLLIElement);
  });

  it('shows no more than 6 results', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'ma' } });

    expect(screen.getByRole('listbox').children.length).toBeLessThanOrEqual(6);
  });

  it('shows "No results found" for an unrecognised query', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'asdf1234' } });

    expect(screen.getByRole('listbox').children.length).toEqual(1);
    expect(screen.getByRole('listbox')).toHaveTextContent('No results found');
  });

  it('does not show results for a single search character', async () => {
    const expectedPlaceholder = "Pick-up Location";
    render(<App />);

    await waitFor(() => screen.getByLabelText(expectedPlaceholder));
    const searchInput = screen.getByLabelText(expectedPlaceholder);

    await fireEvent.change(searchInput, { target: { value: 'ma' } });

    expect(screen.getByRole('listbox').children[0]).toBeInstanceOf(HTMLLIElement);

    await fireEvent.change(searchInput, { target: { value: 'm' } });

    expect(() => screen.getByRole('listbox')).toThrow();
  });

});

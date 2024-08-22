import { vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

describe("testing my App", () => {
  it("display the loading state:", async () => {
    vi.mocked(useQuery).mockReturnValue({
      isLoading: true,
    } as UseQueryResult);

    render(<App />);

    expect(screen.getByTestId("spinner-component")).toBeInTheDocument();
  });

  it("display the not found message:", async () => {
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: new Error("Something went wrong"),
      isLoading: false,
    } as UseQueryResult);

    render(<App />);

    expect(screen.getByText("Pokemon Not Found :(")).toBeInTheDocument();
  });

  it("display card pokemon:", async () => {
    vi.mocked(useQuery).mockReturnValue({
      data: {
        pokemon: "pikachu",
        abilities: ["lightning-rod", "static"],
        urlArtWork:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
    } as UseQueryResult);

    render(<App />);

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
});

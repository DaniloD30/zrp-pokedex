import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardPokemon from "..";

describe("Card Pokemon", () => {
  it("should render a complete Card Pokemon", () => {
    render(
      <CardPokemon
        pokemon={{
          pokemon: "pikachu",
          abilities: ["abilities", "abilities1"],
          urlArtWork:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        }}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /pikachu/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/abilities1/i)).toBeInTheDocument();

    expect(screen.getByRole("img")).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    );
    
  });
});

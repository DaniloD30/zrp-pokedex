import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import service from "../services/get-pokemon-services";

const mock = new MockAdapter(axios);

describe("Pokemon Controller", () => {
  it("should return sorted abilities of the pokemon", async () => {
    mock.onGet("https://pokeapi.co/api/v2/pokemon/pikachu").reply(200, {
      id: "25",
      abilities: [
        { ability: { name: "lightning-rod" } },
        { ability: { name: "static" } },
      ],
    });

    const promise = await service.getPokemonAbilitiesService("pikachu");

    expect(promise).toEqual({
      abilities: ["lightning-rod", "static"],
      pokemon: "pikachu",
      urlArtWork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    });
  });

  

});

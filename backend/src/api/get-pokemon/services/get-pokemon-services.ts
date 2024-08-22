import axios from "axios";

export default {
  async getPokemonAbilitiesService(pokemonName: string) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const abilities: string[] = response.data.abilities.map(
        (ability: any) => ability.ability.name
      );

      const sortedAbilities: string[] = abilities.sort();

      return {
        pokemon: pokemonName,
        abilities: sortedAbilities,
        urlArtWork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`,
      };
    } catch (error) {
      throw new Error("Pokémon not found or an error occurred.");
    }
  },
};

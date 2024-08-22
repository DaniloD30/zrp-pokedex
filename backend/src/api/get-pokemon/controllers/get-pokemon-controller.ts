import { Context } from "koa";
const { NotFoundError } = require("@strapi/utils").errors;

interface PokemonAbilities {
  pokemon: string;
  abilities: string[];
  urlArtWork: string;
}

export default {
  async getPokemonAbilities(ctx: Context) {
    const { pokemonName } = ctx.params as { pokemonName: string };

    try {
      const data: PokemonAbilities = (await strapi
        .service("api::get-pokemon.get-pokemon-services")
        .getPokemonAbilitiesService(pokemonName.toLowerCase())) as PokemonAbilities;

      ctx.send({
        data,
      });
    } catch (error) {
      throw new NotFoundError("Pokémon not found or an error occurred.");
    }
  },
};

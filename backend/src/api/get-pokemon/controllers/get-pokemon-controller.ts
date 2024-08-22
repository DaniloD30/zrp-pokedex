import { Context } from "koa";
const { NotFoundError } = require("@strapi/utils").errors;
export default {
  async getPokemonAbilities(ctx: Context) {
    const { pokemonName } = ctx.params as { pokemonName: string };

    try {
      const data = (await strapi
        .service("api::get-pokemon.get-pokemon-services")
        .getPokemonAbilitiesService(pokemonName)) as {
        pokemon: string;
        abilities: string[];
        urlArtWork: string;
      };

      ctx.send({
        data,
      });
    } catch (error) {
      throw new NotFoundError("Pokémon not found or an error occurred.");
    }
  },
};

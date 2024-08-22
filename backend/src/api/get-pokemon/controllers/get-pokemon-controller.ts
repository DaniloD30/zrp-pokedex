import { Context } from "koa";

export default {
  async getPokemonAbilities(ctx: Context) {
    const { pokemonName } = ctx.params as { pokemonName: string };

    try {
      const data = (await strapi
        .service("api::get-pokemon.get-pokemon-services")
        .getPokemonAbilitiesService(pokemonName)) as {
        pokemon: string;
        abilities: string[];
      };

      ctx.send({
        data,
      });
    } catch (error) {
      ctx.send({
        error: "Pokémon not found or an error occurred.",
        details: error.message,
      });
    }
  },
};

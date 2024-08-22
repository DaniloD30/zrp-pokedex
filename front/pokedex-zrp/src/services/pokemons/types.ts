export type PokemonResponse = {
  pokemon: string;
  abilities: string[];
  urlArtWork: string;
  error?: {
    status: string;
  }
};

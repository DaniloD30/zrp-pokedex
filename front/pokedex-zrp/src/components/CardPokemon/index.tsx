import { CardPokemonType } from "./types";

const CardPokemon = ({ pokemon }: CardPokemonType) => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-bold text-lg">
          {pokemon?.pokemon.toLocaleUpperCase()}
        </h4>
        <img src={pokemon?.urlArtWork} width="200" />
      </div>
      <div className="flex flex-col gap-4 max-h-[500px] p-5 overflow-y-auto">
        {pokemon?.abilities.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="font-semibold text-base marker:text-blue-400"
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CardPokemon;

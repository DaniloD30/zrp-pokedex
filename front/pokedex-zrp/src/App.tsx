import { useForm } from "react-hook-form";
import CardPokemon from "./components/CardPokemon";
import Header from "./components/Header";
import { TextField } from "./components/Input";
import { usePokemon } from "./services/pokemons";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import { Spinner } from "./components/Spinner";

//TESTS UNITÁRIOS

function App() {
  const { register, watch } = useForm<{
    namePokemon: string;
  }>();

  const [debouncedPokemonName, setDebouncedPokemonName] = useState("");

  const pokemonName = watch("namePokemon");

  const { data, isLoading, error } = usePokemon(debouncedPokemonName);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPokemonName(pokemonName);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [pokemonName]);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center space-y-16 h-32">
        <TextField placeholder="Pokemon Name" {...register("namePokemon")} />
      </div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <NotFound />
      ) : (
        <CardPokemon pokemon={data} />
      )}
    </>
  );
}

export default App;

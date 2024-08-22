import Header from "./components/Header";
import { usePokemon } from "./services/pokemons";

//HEADER
//INPUT
//CARD POKEMON
// ABILITIES
//REACT HOOK FORM
//NÃO PRECISA DE ESTADO
//INPUT
//TESTS UNITÁRIOS

function App() {
  const { data } = usePokemon("pikachu");

  return (
    <>
      <Header />
      {/* <div className="flex flex-col items-center justify-center space-y-7">
        <div className="text-4xl text-yellow-400">Pokedex ZRP</div>
        <input className="rounded-sm" placeholder="Search Pokemon" />
        <div className="text-4xl text-black">{data?.pokemon}</div>
      </div> */}
    </>
  );
}

export default App;

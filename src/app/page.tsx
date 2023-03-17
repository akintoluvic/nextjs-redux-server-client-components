import PokemonTable from "./components/PokemonTable";
import SSRPokemonTable from "./components/SSRPokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3001/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <PokemonTable pokemons={data} />
      <br></br>
      <div>SSR below</div>
      <SSRPokemonTable />
    </main>
  );
}

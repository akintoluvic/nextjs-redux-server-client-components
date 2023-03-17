import SearchInput from "./components/SearchInput";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3001/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <br></br>
      <SearchInput />
    </main>
  );
}

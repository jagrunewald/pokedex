import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import PokemonDetails from "./Pages/PokemonDetails/PokemonDetails";
import Pokemons from './Pages/Pokemons/Pokemons';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemondetails" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;

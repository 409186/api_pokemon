import './App.css';
import React from 'react';
import Searching from './components/Searching/Searching';
import SearchResults from './components/SearchResults/SearchResults';
import { useGetPokemons } from './hook/useGetPokemons';

function App() {
  const { infoPokemon, setSearch, results } = useGetPokemons();
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <h1>Pokémon</h1>
      <Searching handleSearch={handleSearch} />
      <SearchResults results={results} infoPokemon={infoPokemon} />
    </div>
  );
}

export default App;

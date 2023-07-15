import './App.css';
import React, { useState, useEffect } from 'react';
import Searching from './Searching';
import SearchResults from './SearchResults';

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [infoPokemon, setInfoPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((responde) => responde.json())
      .then((info) => setData(info.results))

    const filteredResults = data?.filter(result =>
      result.name.toLowerCase().includes(search.toLowerCase())
    );

    setResults(filteredResults)
  }, [search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if(results.length === 1){
      fetch(results[0].url)
        .then((responde) => responde.json())
        .then((info) => setInfoPokemon(info))
    }
  }, [results])

  return (
    <div className="App">
      <h1>Pokémon</h1>
      <Searching handleSearch={handleSearch} />
      <SearchResults results={results} infoPokemon={infoPokemon} />
    </div>
  );
}

export default App;

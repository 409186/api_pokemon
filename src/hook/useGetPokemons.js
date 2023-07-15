import { useCallback, useEffect, useState } from 'react';
import { getPokemons } from '../services/pokemon'

export const useGetPokemons = () => {
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    const [infoPokemon, setInfoPokemon] = useState(null)

    const fetchPokemon = useCallback(async() => {
        const response = await getPokemons()
        const filteredResults = response.results?.filter(result =>
          result.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(filteredResults)
      }, [search])

      useEffect(() => {
        fetchPokemon()
      }, [fetchPokemon])

      useEffect(() => {
        if(results.length === 1){
          fetch(results[0].url)
            .then((responde) => responde.json())
            .then((info) => setInfoPokemon(info))
        }
      }, [results])

      return {
        results, infoPokemon, setSearch
      }
}
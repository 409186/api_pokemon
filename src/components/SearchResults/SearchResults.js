import React from 'react';
import { firstLetterMayus } from './SearchResults.utils'
import "./SearchResults.css"

const SearchResults = ({ results, infoPokemon }) => {
  return (
    <div>
      <div className='title_pokemon'>
        {results.map(result => (
          <div key={result.url}>
            {firstLetterMayus(result.name)}
          </div>
        ))}
      </div>
      <div>
        {results.length === 1 && infoPokemon && (
          <>
            <div className='info_weight'>
              <p>Weight: </p> {infoPokemon.weight}
            </div>
            <div className='info_types'>
              <p>Types:</p>
              <div>
                {infoPokemon.types.map((type) => (
                  <li key={type.type.name}>{firstLetterMayus(type.type.name)}</li>
                ))}
              </div>
            </div>
            <div className='info_moves'>
              <p>Moves:</p> {infoPokemon.moves.length}
            </div>
            <div className='info_sprites'>
              <p>Sprites: </p>
              <div className='info_image'>
                <div>
                  <p>Front_default</p>
                  <img className='front_pokemon' src={infoPokemon.sprites.front_default} alt="Pokemon"/>
                </div>
                <div>
                  <p>Front_shiny</p>
                  <img className='front_pokemon' src={infoPokemon.sprites.front_shiny} alt="Pokemon shiny"/>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
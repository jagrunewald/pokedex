import React, { useState } from 'react';
import getPokemon from "../../services/getPokemon";
import imgSearch from '../../img/search.png';
import './Pokemons.css';

export default function Pokemons () {
  const [search, setSearch] = useState('');

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleClick () {
    const results = await getPokemon(search);
    console.log('results',results);
    return results;
  };

  return (
    <div className='pokemons'>
      <div className='pokemons-search'>
        <img src={imgSearch} alt='Search...'/>
        <input
          type='text'
          className='input-search'
          placeholder='Search...'
          value={search}
          onChange={ handleChange }
        />
        <button type='button' className='btn-search' onClick={ handleClick }>Search</button>
      </div>
      <div>
        <h1>teste</h1>
      </div>
    </div>
  )
};

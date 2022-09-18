import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPokemon from '../CardPokemon/CardPokemon';
import imgSearch from '../../img/search.png';
import './Pokemons.css';

export default function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  
  const searchPokemon = (name) => {
    var filterPokemons = [];
    if (name === '') {
      fetchPokemons();
    }

    for (var i in pokemons) {
      if(pokemons[i].data.name.includes(name)) {
        filterPokemons.push(pokemons[i])
      }
    }
    setPokemons(filterPokemons);
  }

  const fetchPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 400; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var result = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    return result;
  }

  useEffect(() => {
    fetchPokemons();
  },[]);

  return (
    <div className='pokemons'>
      <div className='pokemons-menu'>
        <div className='pokemons-search'>
          <img src={imgSearch} alt='Search...'/>
          <input
            type='text'
            className='input-search'
            placeholder='Search...'
            onChange={(e) => searchPokemon(e.target.value)}
          />
        </div>
      </div>
      <div className='pokemons-all'>
        {
          pokemons.map((pokemon, index) => {
            return (
              <CardPokemon key={index} pokemon={pokemon} />
            )
          })
        }
      </div>
    </div>
  )
};

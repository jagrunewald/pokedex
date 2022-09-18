import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPokemon from '../CardPokemon/CardPokemon';
import imgSearch from '../../img/search.png';
import './Pokemons.css';

export default function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsSearch, setPokemonsSearch] = useState([]);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(48);
  
  const searchPokemon = async (name) => {
    await fetchPokemonsSearch();
    var filterPokemons = [];
    if (name === '') {
      fetchPokemons();
    }

    for (var i in pokemonsSearch) {
      // console.log('pokemons for', pokemons);
      if(pokemonsSearch[i].data.name.includes(name)) {
        filterPokemons.push(pokemonsSearch[i])
      }
    }
    console.log('filter', filterPokemons);
    setPokemons(filterPokemons);
  }

  const fetchPokemonsSearch = () => {
    var endpoints = [];
    for (var i = 1; i < 300; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var result = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonsSearch(res));
    return result;
  }

  const fetchPokemons = () => {
    var endpoints = [];
    for (var i = pageStart; i < (pageStart+pageEnd); i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var result = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    return result;
  }

  useEffect(() => {
    fetchPokemons();
  },[]);

  useEffect(() => {
    fetchPokemons();
  },[pageStart]);

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
        <div className='pokemons-pages'>
          <button type='button' className='page' onClick={() => setPageStart(1)}>1</button>
          <button type='button' className='page' onClick={() => setPageStart(49)}>2</button>
          <button type='button' className='page' onClick={() => setPageStart(97)}>3</button>
          <button type='button' className='page' onClick={() => setPageStart(145)}>4</button>
          <button type='button' className='page' onClick={() => setPageStart(193)}>5</button>
          <button type='button' className='page' onClick={() => setPageStart(241)}>6</button>
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

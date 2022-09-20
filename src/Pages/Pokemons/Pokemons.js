import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import imgSearch from '../../img/search.png';
import './Pokemons.css';

export default function Pokemons () {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsSearch, setPokemonsSearch] = useState([]);
  const [pageStart, setPageStart] = useState(1);

  const containerRef = useRef();
  
  const searchPokemon = async (name) => {
    const nameLower = name.toLowerCase();
    console.log(nameLower);
    await fetchPokemonsSearch();
    var filterPokemons = [];
    if (nameLower === '') {
      fetchPokemons();
    }

    for (var i in pokemonsSearch) {
      if(pokemonsSearch[i].data.name.includes(nameLower)) {
        filterPokemons.push(pokemonsSearch[i])
      }
    }
    setPokemons(filterPokemons);
  }

  const fetchPokemonsSearch = () => {
    var endpoints = [];
    for (var i = 1; i < 288; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var result = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonsSearch(res));
    return result;
  }

  const fetchPokemons = () => {
    var endpoints = [];
    for (var i = pageStart; i < (pageStart+48); i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var result = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    return result;
  }

  const handleClass = (id) => {
    const ident = Number(id);
    const pages = containerRef.current.children;
    pages[0].className='page';
    pages[1].className='page';
    pages[2].className='page';
    pages[3].className='page';
    pages[4].className='page';
    pages[5].className='page';
    pages[ident].className='page-active';
  }

  useEffect(() => {
    fetchPokemons();
  },[]);

  useEffect(() => {
    fetchPokemons();
  },[pageStart]);

  return (
    <div className='pokemons'>
      <Navbar />
      <div className='pokemons-menu'>
        <div className='pokemons-search'>
          <div className='container-search'>
            <img src={imgSearch} alt='Search Pokemon...'/>
            <input
              type='text'
              className='input-search'
              placeholder='Search Pokemon...'
              onChange={(e) => searchPokemon(e.target.value)}
            />
          </div>
        </div>
        <div className='pokemons-pages' ref={containerRef}>
          <button type='button' className='page-active' id='0' onClick={(e) => {setPageStart(1); handleClass(e.target.id);}}>1</button>
          <button type='button' className='page' id='1' onClick={(e) => {setPageStart(49); handleClass(e.target.id);}}>2</button>
          <button type='button' className='page' id='2' onClick={(e) => {setPageStart(97); handleClass(e.target.id);}}>3</button>
          <button type='button' className='page' id='3' onClick={(e) => {setPageStart(145); handleClass(e.target.id);}}>4</button>
          <button type='button' className='page' id='4' onClick={(e) => {setPageStart(193); handleClass(e.target.id);}}>5</button>
          <button type='button' className='page' id='5' onClick={(e) => {setPageStart(241); handleClass(e.target.id);}}>6</button>
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

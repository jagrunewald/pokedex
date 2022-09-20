import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './PokemonDetails.css';

export default function PokemonDetails () {
  const location = useLocation();
  const pokemon = location.state;
  console.log('pokemon detail', pokemon)
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  }

  return (
    <div className='pokemon-details'>
      <Navbar />
      <div className='pokemon-details-nav'>
        <button className='button' onClick={onClick}>Voltar</button>
      </div>
      <div className='container-pokemon-details'>
        <div className='card-pokemon-details'>
          <p>{pokemon.name}</p>
        </div>
      </div>

    </div>
  );
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import PokemonPerformance from '../../Components/PokemonPerformance/PokemonPerformance';
import handleImg from '../../helpers/handleImg';
import handleBackgroundColor from '../../helpers/handleBackgroundColor';
import handleColor from '../../helpers/handleColor';
import handleId from '../../helpers/handleId';
import { WiDirectionLeft } from 'react-icons/wi';
import './PokemonDetails.css';

export default function PokemonDetails () {
  const location = useLocation();
  const pokemon = location.state;
  const navigate = useNavigate();
  console.log(pokemon);

  const onClick = () => {
    navigate('/');
  }  

  return (
    <div className='pokemon-details' style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name)}}>
      <Navbar />
      <div className='pokemon-details-menu'>
        <button className='button' onClick={onClick}><WiDirectionLeft /></button>
      </div>
      <div className='container-pokemon-details' style={{color: handleColor(pokemon.types[0].type.name)}}>
        <div className='container-img'>
          <h1 className='name'>{pokemon.name.toUpperCase()} | {handleId(pokemon.id)}</h1>
          {/* <h3 className='id'>{handleId(pokemon.id)}</h3> */}
          <p className='type'>{pokemon.types.map((type) => type.type.name).join(' | ')}</p>
          <img src={handleImg(pokemon.id)} alt='img' className='img'/>
        </div>
        <div className='card-pokemon-details'>
          <h3>EXPERIENCE</h3>
          <p className='experience'>{pokemon.base_experience}</p>
          <h3>ABILITY</h3>
          <p className='ability'>{pokemon.abilities.map((ability) => ability.ability.name).join(' | ')}</p>
          <PokemonPerformance pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

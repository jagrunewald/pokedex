import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
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

  const onClick = () => {
    navigate('/');
  }

  return (
    <div className='pokemon-details' style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name)}}>
      <Navbar />
      <div className='pokemon-details-menu'>
        <button className='button' onClick={onClick}><WiDirectionLeft /></button>
      </div>
      <div className='container-pokemon-details'>
        <div className='container-img'>
          <img src={handleImg(pokemon.id)} alt='img' className='img'/>
        </div>
        <div className='card-pokemon-details' style={{color: handleColor(pokemon.types[0].type.name)}}>
          <h2 className='name'>{pokemon.name.toUpperCase()}</h2>
          <p className='id'>{handleId(pokemon.id)}</p>
          <p className='experience'>Experience: {pokemon.base_experience}</p>
          <p className='type'>Type: {pokemon.types.map((type) => type.type.name).join(' | ')}</p>
          <p className='ability'>Ability: {pokemon.abilities.map((ability) => ability.ability.name).join(' | ')}</p>
          <div className='container-performance'>
            <p className='performance'>{pokemon.stats[0].stat.name}  {pokemon.stats[0].base_stat}</p>
            <p className='performance'>{pokemon.stats[1].stat.name}  {pokemon.stats[1].base_stat}</p>
            <p className='performance'>{pokemon.stats[2].stat.name}  {pokemon.stats[2].base_stat}</p>
            <p className='performance'>{pokemon.stats[3].stat.name}  {pokemon.stats[3].base_stat}</p>
            <p className='performance'>{pokemon.stats[4].stat.name}  {pokemon.stats[4].base_stat}</p>
            <p className='performance'>{pokemon.stats[5].stat.name}  {pokemon.stats[5].base_stat}</p>
          </div>
          <div className='container-images'>
            <img src={pokemon.sprites.front_default} alt='img' className='images'/>
            <img src={pokemon.sprites.back_default} alt='img' className='images'/>
          </div>
        </div>
      </div>
    </div>
  );
};

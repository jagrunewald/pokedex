import React from 'react';
import { useNavigate } from 'react-router-dom';
import handleBackgroundColor from '../../helpers/handleBackgroundColor';
import handleColor from '../../helpers/handleColor';
import handleImg from '../../helpers/handleImg';

export default function CardPokemon (props) {
  const {pokemon} = props;
  const navigate = useNavigate();

  const cardSelect = (pokemon) => {
    navigate('/pokemondetails', { state: pokemon });
  }

  return (
    <div
      className='pokemon-card'
      style={{backgroundColor: handleBackgroundColor(pokemon.data.types[0].type.name), color: handleColor(pokemon.data.types[0].type.name)}}
      onClick={() => cardSelect(pokemon.data)}
    >
      <div className='container-img'>
        <img src={handleImg(pokemon.data.id)} alt='img' className='img'/>
      </div>
      <div className='container-name-types'>
        <p className='name'>{pokemon.data.name.toUpperCase()}</p>
        <div className='container-types'>
          <p className='type'>{pokemon.data.types.map((type) => type.type.name).join(' | ')}</p>
        </div>
      </div>      
    </div>
  );
};

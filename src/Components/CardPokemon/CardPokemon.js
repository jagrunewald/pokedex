import React from 'react';
import handleBackgroundColor from '../../helpers/handleBackgroundColor';
import handleColor from '../../helpers/handleColor';
import handleImg from '../../helpers/handleImg';

export default function CardPokemon (props) {
  const {pokemon} = props;

  return (
    <div className='pokemon-card' style={{backgroundColor: handleBackgroundColor(pokemon.data.types[0].type.name), color: handleColor(pokemon.data.types[0].type.name)}}>
      <div className='container-img'>
        <img src={handleImg(pokemon.data.id)} alt='img' className='img'/>
      </div>
      <div className='container-name-types'>
        <p className='name'>{pokemon.data.name.toUpperCase()}</p>
        <div className='container-types'>
        {/* <p className='type'>{pokemon.data.types[1] ? pokemon.data.types[0] + ' | ' + pokemon.data.types[1] : pokemon.data.types[0]}</p> */}
          <p className='type'>{pokemon.data.types.map((type) => type.type.name).join(' | ')}</p>
        </div>
      </div>
      
    </div>
  );
};
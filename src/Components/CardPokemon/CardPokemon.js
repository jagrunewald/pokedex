import React from 'react';

export default function CardPokemon (props) {
  const {pokemon} = props;

  return (
    <div className='pokemons-list'>
      <div className='pokemon-img'>
        <img src={pokemon.data.sprites.front_default} alt='img' className='img'/>
      </div>
      <p className='name'>{pokemon.data.name}</p>
      <p className='id'>{pokemon.data.types[0].type.name}</p>
      <div className='div-types'>
        {
          pokemon.data.types.map((type, index) => {
            return (
              <p key={index} className='type'>{type.name}</p>
            )
          })
        }
      </div>
    </div>
  );
};
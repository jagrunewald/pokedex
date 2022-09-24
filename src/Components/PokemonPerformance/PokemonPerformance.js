import React from 'react';
import handleBackgroundColor from '../../helpers/handleBackgroundColor';
import handleBackgroundColorProgress from '../../helpers/handleBackgroundColorProgress';
import handleColor from '../../helpers/handleColor';
import './PokemonPerformance.css';

export default function PokemonPerformance (props) {
  const {pokemon} = props;
  console.log(pokemon);

  const handleWidth = (base_stat) => {    
    if(base_stat > 100) {
      return `${base_stat - (base_stat - 100)}%`;
    }
    if(base_stat <= 30) {
      return `${base_stat + 10}%`;
    }
    else {
      return `${base_stat}%`;
    }
  }

  return (
    <div className='performance' style={{backgroundColor: handleBackgroundColorProgress(pokemon.types[0].type.name), color: handleColor(pokemon.types[0].type.name)}}>
      <h3>PERFORMANCE</h3>
      <div class="container-performance">
        <p>{pokemon.stats[0].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[0].base_stat)}}>
            <span class="progress-count">{pokemon.stats[0].base_stat}</span>
        </div>
      </div>
      <div class="container-performance">
        <p>{pokemon.stats[1].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[1].base_stat)}}>
            <span class="progress-count">{pokemon.stats[1].base_stat}</span>
        </div>
      </div>
      <div class="container-performance">
        <p>{pokemon.stats[2].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[2].base_stat)}}>
            <span class="progress-count">{pokemon.stats[2].base_stat}</span>
        </div>
      </div>
      <div class="container-performance">
        <p>{pokemon.stats[3].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[3].base_stat)}}>
            <span class="progress-count">{pokemon.stats[3].base_stat}</span>
        </div>
      </div>
      <div class="container-performance">
        <p>{pokemon.stats[4].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[4].base_stat)}}>
            <span class="progress-count">{pokemon.stats[4].base_stat}</span>
        </div>
      </div>
      <div class="container-performance">
        <p>{pokemon.stats[5].stat.name.toUpperCase()}</p>
        <div class="progress-bar prog" style={{backgroundColor: handleBackgroundColor(pokemon.types[0].type.name), width: handleWidth(pokemon.stats[5].base_stat)}}>
            <span class="progress-count">{pokemon.stats[5].base_stat}</span>
        </div>
      </div>
    </div>
  );
};

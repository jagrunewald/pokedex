import React from "react";
import pokedex from "../../img/pokedex.png";
import './Navbar.css';

export default function Navbar () {
  return (
    <nav>
      <div className='navbar-img'>
        <img src={pokedex} alt='img-pokedex' id='img-pokedex' />
      </div>
    </nav>
  )
};

import React from "react";
import pokemon from "../img/pokemon.png"

export default function Navbar () {
  return (
    <nav>
      <div className='navbar-img'>
        <img src={pokemon} alt='' />
      </div>
    </nav>
  )
};

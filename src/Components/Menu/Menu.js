import React from "react";
import './Menu.css';
import search from '../../img/search.png';

export default function Menu () {
  return (
    <div className='menu'>
      <div className='menu-div-search'>
        <img src={search} alt='Search...'/>
        <input type='text' className='input-search' placeholder='Search...'/>
        <button className='btn-search'>Search</button>
      </div>
      <div className='menu-div-first-filter'>
        <select className='select-first-filter'>
          <option>Opção 1</option>
          <option>Opção 2</option>
        </select>
      </div>
      <div className='menu-div-second-filter'>
        <select className='select-second-filter'>
          <option>Opção 1</option>
          <option>Opção 2</option>
        </select>
      </div>
    </div>
  )
};

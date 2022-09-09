import React from "react";
import Navbar from "../Navbar/Navbar";
import './Menu.css';

export default function Menu () {
  return (
    <div className='menu'>
      <Navbar />
      <div className='menu-options'>
        <input type='text' className='input-search'>Search</input>
      </div>
    </div>
  )
};

import React, { useState } from "react";
import s from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };
  let random = () => {
    onSearch(Math.floor(Math.random() * 700 + 1))
  };

  return (
    <div>
      <input
        className={s.barra}
        type="search"
        placeholder="INSERT A NUMBER..."
        onChange={handleChange}
        value={id}
      />
      <button className={s.letra} onClick={() => {onSearch(id); setId(' ')}}>
        ADD CHARACTER
      </button>
    <button className={s.letra} onClick={() =>{random()}}>Add Random Card</button>
    </div>
  );
};

export default SearchBar;

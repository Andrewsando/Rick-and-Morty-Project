import React, { useState } from "react";
import s from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
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
      <button className={s.letra} onClick={() => {onSearch(id); setId('')}}>
        ADD A CHARACTER
      </button>
    </div>
  );
};

export default SearchBar;

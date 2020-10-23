import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

import './index.css';

const InputSearch = () => {
  const [city, setCity] = useState('');

  const handleInputSearch = (event) => {
    setCity(event.target.value);
  };

  sessionStorage.setItem('city', city);

  return (
    <div className="search__container">
      <input
        type="text"
        placeholder="Insira o nome da cidade"
        className="search__input"
        onChange={handleInputSearch}
      />

      <Link
        to="/forecast"
        className="search__link"
      >
        <button>
          <BiSearchAlt2
            className="search__icon"
          />
        </button>
      </Link>
    </div>
  )
};

export default InputSearch;

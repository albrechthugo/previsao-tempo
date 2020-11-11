import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

import './index.css';

const InputSearch = () => {
  const [city, setCity] = useState('');
  const [preenchido, setPreenchido] = useState(false);

  const handleInputSearch = (event) => {
    if(event.target.value == '') {
      setPreenchido(false);
    } else {
      setPreenchido(true);
    }
    
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

      { preenchido ? 
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
      : 
          <button>
            <BiSearchAlt2
              className="search__icon"
            />
          </button>
      }    
      
    </div>
  )
};

export default InputSearch;

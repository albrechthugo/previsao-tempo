import React from 'react';

import request from '../../services/api';

import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

import './index.css';

const InputSearch = () => {

    const getData = (city) => {
        request.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=joinville&u=c&format=json`,
            null,
            null,
        
            function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            }          
        )
    }

    return (
        <div className="search__container">
            <input type="text" placeholder="Insira o nome da cidade" className="search__input"/>
            <Link to="/forecast" className="search__link">
                <button onClick={() => getData()}>
                <BiSearchAlt2 className="search__icon"/>
                </button>
            </Link>
        </div>
    )
};

export default InputSearch;
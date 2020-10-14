import React from 'react';

import { RiCloseFill } from 'react-icons/ri';
import { BsArrowDown } from 'react-icons/bs';
import { BsArrowUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './index.css';

const Forecast = () => {
    return (
        <main className="city-forecast__container">
            <Link to="/">
                <RiCloseFill className="close-icon"/>
            </Link>
            <section className="city-forecast__wrapper">
                <strong>Niterói, RJ - Brasil</strong>
                <h1>20°C Nublado</h1>

                <article className="city-forecast__temperature">
                    <BsArrowDown className="arrow-icon"/>
                    <strong>19°</strong>
                        <BsArrowUp className="arrow-icon"/>
                        <strong>32°</strong>
                            <p>Sensação</p>
                            <strong>35°C</strong>
                </article>
                <article className="city-forecast__wind">
                    <p>Vento 
                        <strong>18km/h</strong>
                    </p>
                        <p>Umidade 
                            <strong>89%</strong>
                        </p>
                </article>
            </section>

            <div className="separator"></div>

            
        </main>
    )
}

export default Forecast;
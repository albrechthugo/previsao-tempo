import React, { useEffect, useState } from 'react';

import { RiCloseFill } from 'react-icons/ri';
import { BsArrowDown } from 'react-icons/bs';
import { BsArrowUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './index.css';

import request from "../../services/api";

const Forecast = () => {
  let inputText = sessionStorage.getItem('city');

  const [cidade, setCidade] = useState('Joinville');
  const [estado, setEstado] = useState('SC');
  const [pais, setPais] = useState('Brasil');
  const [temperaturaAtual, setTemperaturaAtual] = useState('20');
  const [minima, setMinima] = useState('14');
  const [maxima, setMaxima] = useState('32');
  const [sensacao, setSensacao] = useState('26');
  const [vento, setVento] = useState('6');
  const [umidade, setUmidade] = useState('93');
  const [condicao, setCondicao] = useState('Chuva');


  const getData = (inputText) => {
    request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${inputText}&u=c&format=json`,
      null,
      null,

      async function (err, data) {
        const response = await JSON.parse(data);
        console.log(response);
      }
    )
  }

  useEffect(() => getData(inputText), [inputText])

  return (
    <main className="city-forecast__container">
      <Link to="/">
          <RiCloseFill className="close-icon"/>
      </Link>
      <section className="city-forecast__wrapper">
          <strong>{cidade}, {estado} - {pais}</strong>
          <h1>{temperaturaAtual}° {condicao}</h1>

        <article className="city-forecast__temperature">
          <BsArrowDown className="arrow-icon"/>
          <strong>{minima}°</strong>
              <BsArrowUp className="arrow-icon"/>
              <strong>{maxima}°</strong>
                  <p>Sensação</p>
                  <strong>{sensacao}</strong>
        </article>
        <article className="city-forecast__wind">
          <p>Vento
            <strong>{vento}km/h</strong>
          </p>

            <p>Umidade
              <strong>{umidade}%</strong>
              </p>
        </article>
      </section>

      <div className="separator">
      </div>

    </main>
  )
}

export default Forecast;
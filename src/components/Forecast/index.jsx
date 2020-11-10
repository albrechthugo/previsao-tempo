import React, { useEffect, useState } from 'react';

import { RiCloseFill } from 'react-icons/ri';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './index.css';

import request from "../../services/api";
import translate from '../../utils/translate';

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
  const [condicao, setCondicao] = useState('Sol');

  const getData = (inputText) => {
      let cityParam = 'joinville';

      if(inputText != null) {
          cityParam = inputText;
      }

    request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${cityParam}&u=c&format=json`,
      null,
      null,

      async function (err, data) {
        try {
          const response = await JSON.parse(data);

          const { location, current_observation, forecasts } = response;

          setCidade(location.city);
          setEstado(location.region);
          setPais(location.country);
          setTemperaturaAtual(current_observation.condition.temperature);
          setMinima(forecasts[0].low);
          setMaxima(forecasts[0].high);
          setCondicao(translate[forecasts[0].code]);
          setSensacao(current_observation.wind.chill);
          setVento(current_observation.wind.speed);
          setUmidade(current_observation.atmosphere.humidity);

        } catch(err) {
          console.error(err);
        }
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
          <strong>
            {cidade}, {estado} - {pais}
          </strong>

          <h1>
            {temperaturaAtual}° {condicao}
            </h1>

        <article className="city-forecast__temperature">
          <BsArrowDown className="arrow-icon"/>
          <strong>{minima}°</strong>
              <BsArrowUp className="arrow-icon"/>
              <strong>
                {maxima}°
                </strong>
                  <p>
                    Sensação
                    </p>
                  <strong>
                    {sensacao}°
                    </strong>
        </article>

        <article className="city-forecast__wind">
          <p>Vento
            <strong>
              {vento}km/h
              </strong>
          </p>

            <p>Umidade
              <strong>
                {umidade}%
                </strong>
            </p>
        </article>
      </section>

      <div className="separator">
      </div>

    </main>
  )
}

export default Forecast;
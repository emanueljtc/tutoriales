// Dependencias
import React from 'react';
//Componentes
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
// Constantes
import {SNOW} from './../../../constants/weathers';
// Estilos CSS
import './styles.css';
const WeatherData = () => (
  <div className='weatherDataContainer'>
    <WeatherTemperature temperature={10} weatherState={SNOW}/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
  </div>
);

export  default WeatherData;

//Dependencias
import React from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
// Constantes
import { SUN } from './../../constants/weathers'
// Estilo CSS
import './styles.css';
const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s'
};
const WheaterLocation = () => (
  <div className='weatherLocationContainer'>
    <Location city={'Villa de Cura'}/>
    <WeatherData data={data}/>
  </div>
)

export default WheaterLocation;

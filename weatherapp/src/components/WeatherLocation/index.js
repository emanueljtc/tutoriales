//Dependencias
import React from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
// Estilo CSS 
import './styles.css';
const WheaterLocation = () => (
  <div>
    <Location city={'Villa de Cura'}/>
    <WeatherData />
  </div>
)

export default WheaterLocation;

//Dependencias
import React from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';

const WheaterLocation = () => (
  <div>
    <Location city={'Caracas!'}/>
    <WeatherData />
  </div>
)

export default WheaterLocation;

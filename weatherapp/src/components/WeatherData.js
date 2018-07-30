import React from 'react';

//Componentes
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
const WeatherData = () => (
  <div>
    <WeatherTemperature />
    <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
  </div>
);

export  default WeatherData;

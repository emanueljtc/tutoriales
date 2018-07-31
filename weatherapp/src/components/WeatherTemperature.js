// Dependencias
import React from 'react';
import WeatherIcons from 'react-weathericons';
// Constantes
import {CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY } from './../constants/weathers';
const stateIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow"
    case WINDY:
      return "windy";
    default:
      return "day-sunny";
  }
};
const getWeatherIcon = weatherState => {
  return (<WeatherIcons name={stateIconName(weatherState)} size="2x" />);
}
const WeatherTemperature = ({temperature, weatherState}) => (
  <div>
  {getWeatherIcon(weatherState)}
  <span>{`${temperature} C°`}</span>
  </div>
);

export default WeatherTemperature;

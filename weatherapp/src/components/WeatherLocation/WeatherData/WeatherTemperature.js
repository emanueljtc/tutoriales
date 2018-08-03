// Dependencias
import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
// Estilos CSS
import './styles.css';

// Constantes
import {CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  THUNDER,
  DRIZZLE } from './../../../constants/weathers';
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
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
};
const getWeatherIcon = weatherState => {
  return (<WeatherIcons className='wicon' name={stateIconName(weatherState)} size="4x" />);
}
const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureContainer'>
  {getWeatherIcon(weatherState)}
  <span className='temperature'>{`${temperature}`}</span>
  <span className='temperatureType'>C°</span>
  </div>
);
WeatherTemperature.propTypes = {
  temperature:  PropTypes.number.isRequired,
  weatherState: PropTypes.string
};
export default WeatherTemperature;

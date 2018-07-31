// Dependencias
import React from 'react'
import PropTypes from 'prop-types';
// Estilos CSS
import './styles.css';
const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weatherExtraInfoContainer'>
    <span className='extraInfoText'>{`${humidity} % | `}</span>
    <span className='extraInfoText'>{`${wind} wind`}</span>
  </div>
);
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
}
export  default WeatherExtraInfo;

//Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';

// Estilo CSS
import './styles.css';

const WheaterLocation = ({ onWeatherLocationClick, city, data }) => (
      <div className='weatherLocationContainer' onClick={onWeatherLocationClick}>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> :  <CircularProgress size={60} thickness={7} /> }
    </div>
);
WheaterLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}
export default WheaterLocation;

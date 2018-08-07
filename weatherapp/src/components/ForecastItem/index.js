//Dependencias
import React from 'react';
import PropTypes from 'prop-types';

//Componentes
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <div>{weekDay} Hora: {hour} hs</div>
    <WeatherData data={data}/>
  </div>
);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}
export default ForecastItem;

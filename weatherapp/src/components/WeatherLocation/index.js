//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'


// Estilo CSS
import './styles.css';
const api_key = "ba97e056eb1220e06c4a0b6aae37fd8b";
const url = `http://api.openweathermap.org/data/2.5/weather`;
class WheaterLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null
    };
    console.log("constructor");
  }

 componentWillMount() {
   const { city } = this.state;
   const api_weather = `${url}?q=${city}&appid=${api_key}`;
   fetch(api_weather).then(data => {
     return data.json();
   }).then( weather_data => {
     const data = transformWeather(weather_data);
     this.setState({ data });
   });
 }
render = () => {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationContainer'>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> :  <CircularProgress size={60} thickness={7} /> }
    </div>);
  }

}
WheaterLocation.propTypes = {
  city: PropTypes.string,
}
export default WheaterLocation;

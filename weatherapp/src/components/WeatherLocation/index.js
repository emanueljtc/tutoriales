//Dependencias
import React, { Component } from 'react';
import convert from 'convert-units';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
// Constantes
import { SUN, WINDY } from './../../constants/weathers'
// Estilo CSS
import './styles.css';
const location = "Buenos Aires,ar";
const api_key = "ba97e056eb1220e06c4a0b6aae37fd8b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
const data1 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '19 m/s'
};
class WheaterLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires',
      data: data1
    };
  }
  getTemp = kelvin => {
    return convert(kelvin).from('K').to('C')
  }
  getWeatherState = (weatherState) => {
    return SUN;
  }
  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);
    const temperature = this.getTemp(temp);
    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }
    return data
  }
  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then( weather_data => {
      //debugger;
      const data = this.getData(weather_data);
      this.setState({ data });
    });
    console.log('actualizado');
  }
 render = () => {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationContainer'>
      <Location city={city}/>
      <WeatherData data={data}/>
      <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>);
  }

}
export default WheaterLocation;

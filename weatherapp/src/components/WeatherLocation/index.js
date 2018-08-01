//Dependencias
import React, { Component } from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
// Constantes
import { WINDY } from './../../constants/weathers'
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
  handleUpdateClick = () => {
    fetch(api_weather);
    // this.setState({
    //   data: data2
    // });
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

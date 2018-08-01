//Dependencias
import React, { Component } from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
// Constantes
import { SUN, WINDY } from './../../constants/weathers'
// Estilo CSS
import './styles.css';
const data1 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '19 m/s'
};
const data2 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s'
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
    this.setState({
      city: 'Buenos Aires',
      data: data2
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

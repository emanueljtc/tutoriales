//Dependencias
import React, { Component } from 'react';
// Componentes
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'


// Estilo CSS
import './styles.css';
const location = "Buenos Aires,ar";
const api_key = "ba97e056eb1220e06c4a0b6aae37fd8b";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
class WheaterLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires, ar',
      data: null
    };
    console.log("constructor");
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      return data.json();
    }).then( weather_data => {
      //debugger;
      const data = transformWeather(weather_data);
      this.setState({ data });
    });
    console.log('actualizado 100%');
  }
 componentWillMount() {
   this.handleUpdateClick();
 }
render = () => {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className='weatherLocationContainer'>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> : 'Cargando... '}
    </div>);
  }

}
export default WheaterLocation;

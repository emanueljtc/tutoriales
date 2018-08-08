import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Componentes
import ForecastItem from './ForecastItem';
//Servicios
import transformForecast from './../services/transformForecast';
//Estilos CSS
import './styles.css';
/*
const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes"
];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal',
}*/
const api_key = "ba97e056eb1220e06c4a0b6aae37fd8b";
const url = `http://api.openweathermap.org/data/2.5/forecast`;
class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null}
  }
  componentDidMount() {
    // Fetch or axios
    this.updateCity(this.props.city);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city){
      /* se establece el forecastData en null para que cargue de nuevo
      progress */
      this.setState({ forecastData: null});
      this.updateCity(nextProps.city);
    }
  }
  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData })
      }
    );
  }
  renderForecastItemDays(forecastData) {
    return forecastData.map( forecast => (
      <ForecastItem
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
          data={forecast.data}
          />));
  }
  renderProgress = () => {
     return <h3>Cargando Pronostico extendido...</h3>
  }
  render() {
    const { city } = this.props;
    const { forecastData} = this.state;
    return (
      <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        { forecastData ?
           this.renderForecastItemDays(forecastData) :
           this.renderProgress()}
      </div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}
export default ForecastExtended;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Componentes
import ForecastItem from './ForecastItem';
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
class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null}
  }
  renderForecastItemDays() {
    return "Render Items";
    //return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}/>));
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
           this.renderForecastItemDays() :
           this.renderProgress()}
      </div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}
export default ForecastExtended;

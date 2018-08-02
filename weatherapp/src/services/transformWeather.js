// Dependencias
import convert from 'convert-units';
// Constantes
import {SUN} from './../constants/weathers';

const getTemp = kelvin => {
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
}
const getWeatherState = (weatherState) => {
  return SUN;
}
const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(this.weather);
  const temperature = getTemp(temp);
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  }
  return data
}

export default transformWeather;

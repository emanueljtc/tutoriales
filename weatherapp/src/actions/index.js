// Services
import transformForecast from './../services/transformForecast';
// Action Creator
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = "ba97e056eb1220e06c4a0b6aae37fd8b";
const url = `http://api.openweathermap.org/data/2.5/forecast`;

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    // activar en el estado un indicador de busqueda de datos.
    dispatch(setCity(payload));

    return fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        // modificar el estado con el resultado de la promise (fetch)
        dispatch(setForecastData({city: payload, forecastData}))
      }
    );
  };
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
// Componentes
import LocationList from './../components/LocationList';
//Actions
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities } from './../reducers';
class LocationListContainer extends Component {

  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }
  handleSelectedLocation = city => {
    this.props.dispatchSetCity(city);
  }
  render () {
    return (
      <LocationList cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation} />
    );
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity:PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
}
const mapDispatchToProps = dispatch => (
  {
  dispatchSetCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
  }
);

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

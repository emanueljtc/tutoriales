import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
// Componentes
import LocationList from './../components/LocationList';
//Actions
import { setSelectedCity, setWeather } from './../actions';
class LocationListContainer extends Component {

  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }
  handleSelectedLocation = city => {
    this.props.dispatchSetCity(city);
  }
  render () {
    return (
      <LocationList cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation} />
    );
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity:PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
}
const mapDispatchToProps = dispatch => (
  {
  dispatchSetCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
  }
);
export default connect(null, mapDispatchToProps)(LocationListContainer);

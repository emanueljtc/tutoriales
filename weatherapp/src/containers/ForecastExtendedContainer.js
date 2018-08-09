import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities } from './../reducers/cities';
import ForecastExtended from './../components/ForecastExtended';
class ForecastExtendedContainer extends Component {
  render () {
    const {city, forecastData} = this.props;
    return (
        city && // Validando que city no venga en null
        <ForecastExtended city={ city } forecastData={forecastData}/>
    );
  }
}

ForecastExtendedContainer.propTypes = {
   city: PropTypes.string.isRequired,
   forecastData: PropTypes.array,
};
const mapDispatchToProps = state => ({ city: state.city , forecastData: getForecastDataFromCities(state.cities, state.city) });
export default connect(mapDispatchToProps, null)(ForecastExtendedContainer);

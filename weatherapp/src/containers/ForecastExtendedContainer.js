import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';
class ForecastExtendedContainer extends Component {
  render () {
    return (
        this.props.city && // Validando que city no venga en null
        <ForecastExtended city={ this.props.city } />
    );
  }
}

ForecastExtendedContainer.propTypes = {
   city: PropTypes.string.isRequired
};
const mapDispatchToProps = ({ city }) => ({ city });
export default connect(mapDispatchToProps, null)(ForecastExtendedContainer);

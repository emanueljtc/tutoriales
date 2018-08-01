// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
// Estilo CSS
import './styles.css';
const Location = ({ city }) => ( // Object destructuring
  (
    <div>
    <h1>{city}</h1>
    </div>)
);
Location.propTypes = {
  city: PropTypes.string.isRequired,
}
export default Location;

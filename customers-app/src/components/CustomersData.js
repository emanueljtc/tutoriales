// Dependencias
import React from 'react';
import PropTypes from 'prop-types';

const CustomersData = ({name, dni, age }) => {
   return (
     <div>
          <div class="customer-data">
            <h2>Datos del Cliente</h2>
              <div><strong>Nombre</strong><i>{name}</i></div>
              <div><strong>DNI</strong><i>{dni}</i></div>
              <div><strong>EDAD</strong><i>{age}</i></div>
          </div>
     </div>
   );
};
CustomersData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};
export default CustomersData;

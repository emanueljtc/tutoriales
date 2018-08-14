import React from 'react';
import PropTypes from 'prop-types';

const CustomerList = ({ customers }) => {
  return (
    <div>
      <div class="customer-list">
        {
          customers.map(c =>
              <CustomerListItem
                key={c.dni}
                customer={c.name}
                editAction={'Editar'}
                delAction={'Eliminar'}
                urlPath={urlPath}>
              </CustomerListItem>
          )
        }
      </div>
    </div>
  );
};
CustomerList.propTypes = {
    customers: PropTypes.array.isRequired
};

export  default CustomerList;

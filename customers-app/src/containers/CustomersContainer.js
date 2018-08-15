import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';


const customers = [
  {
    "dni": 20355749,
    "name": "Ana Cordova",
    "age": 26
  },
  {
    "dni": 18971787,
    "name": "Emanuel Torres",
    "age": 28
  },
  {
    "dni": 5161055,
    "name": "Joaquin Torres",
    "age": 59
  },
  {
    "dni": 8784453,
    "name": "Ana Clemente",
    "age": 55
  },
];

class CustomersContainers extends Component {
  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }
  renderBody = customers => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={'customer/'}>
      </CustomersList>
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomersActions>
    </div>
    
  )
  render() {
    return (
      <div>
        <AppFrame header={'Listado de Clientes'} body={this.renderBody(customers)}></AppFrame>
      </div>
    );
  }
}

/* CustomersContainers.propTypes = {

}; */

export default withRouter(CustomersContainers);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';




class CustomersContainers extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }
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
        <AppFrame header={'Listado de Clientes'} body={this.renderBody(this.props.customers)}></AppFrame>
      </div>
    );
  }
}
 
CustomersContainers.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

CustomersContainers.defaultProps = {
  customers: []
};

const mapStateToProps = state => ({
  customers: state.customers
});
 
const mapDispatchToProps = { fetchCustomers };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainers));
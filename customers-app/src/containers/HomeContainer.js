import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomersActions';

class HomeContainer extends Component {
  handleOnclick = () => {
    console.log('Handle on Click')
    this.props.history.push('/customers');
  }

  render() {
    return (
      <div>
        <AppFrame
          header='Home'
          body={
            <div>
              esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleOnclick}>
                  Listado de Clientes
                </button>
              </CustomerActions>
            </div>
          }
        ></AppFrame>
      </div>
    );
  }
  
};



export default withRouter(HomeContainer);
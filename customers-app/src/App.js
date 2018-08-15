// Dependencias 
import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderCustomerContainer = () => <h2>Customer Container</h2>;

  renderCustomerListContainer = () => <h3>Customer List Container</h3>;

  renderCustomerNewContainer = () => <h4>Customer New Container</h4>;
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={CustomersContainer} />
            <Switch>
              <Route path="/customers/new" component={CustomersContainer} />
              <Route path="/customers/:dni" component={this.renderCustomerContainer} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;

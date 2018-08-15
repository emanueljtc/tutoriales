// Dependencias 
import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {

  renderHome = () => <h1>Inicio</h1>;

  renderCustomerContainer = () => <h2>Customer Container</h2>;

  renderCustomerListContainer = () => <h3>Customer List Container</h3>;

  renderCustomerNewContainer = () => <h4>Customer New Container</h4>;
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={this.renderHome} />
            <Route exact path="/customers" component={this.renderCustomerListContainer} />
            <Switch>
              <Route path="/customers/new" component={this.renderCustomerNewContainer} />
              <Route path="/customers/:dni" component={this.renderCustomerContainer} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;

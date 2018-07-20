// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu'
class App extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
  }
    render() {
      const { children } = this.props;
        return (
          <div className = "App">
            <Header title="CodeJobs" items={items} />
            <Content body={children} />
            <Footer copyright="&copy; Ing. Torres 2017" />
          </div>
        );
    }
}

export default App;

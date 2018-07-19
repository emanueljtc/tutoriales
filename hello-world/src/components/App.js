// Dependencies
import React, { Component } from 'react';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu'
//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
class App extends Component {
    render() {
        return (
          <div className = "App">
            <Header title="CodeJobs" items={items} />
            <Content />
            <Footer copyright="&copy; Ing. Torres 2017" />
          </div>
        );
    }
}

export default App;

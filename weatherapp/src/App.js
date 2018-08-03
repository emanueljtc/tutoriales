import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Componentes
import LocationList from './components/LocationList';
// Assets
import './App.css';
class App extends Component {
    render() {
        return (
           <MuiThemeProvider>
              <div className = "App">
                <LocationList />
              </div>
           </MuiThemeProvider>
        );
    }
}

export default App;

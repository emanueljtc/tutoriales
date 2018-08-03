import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Componentes
import WeatherLocation from './components/WeatherLocation';
// Assets
import './App.css';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <WeatherLocation/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

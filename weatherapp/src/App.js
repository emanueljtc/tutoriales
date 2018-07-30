import React, { Component } from 'react';
// Componentes
import WeatherLocation from './components/WeatherLocation';
// Assets
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;

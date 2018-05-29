import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( <div className = "App">
            <header className = "App-header">
            <img src = { logo } className = "App-logo" alt = "logo" />
            <h1 className = "App-title"> Bienvenido a React </h1>
            </header>
            <p className = "App-intro">
            Empieza a editar <code> src/App.js </code> y recarga. </p>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { tareas } from './tareas.json'
class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    }
  }
  render() {
    const tasks = this.state.tareas.map((tareas, i) => {
      return (
        <div class="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tareas.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {tareas.priority}
                </span>
            </div>
            <div className="card-body">
              <p>{tareas.description}</p>
              <p><mark>{tareas.responsible}</mark></p>
            </div>
          </div>
        </div>
      )
    })
    return (
            <div className="App">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a href="" className="navbar-brand">
                  Tareas
                  <span className="bagde badge-pill badge-light ml-2">
                      {this.state.tareas.length}
                  </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
              <div className="container">
                <div className="row mt-4">
                  { tasks }
                </div>
              </div>
              <img src = { logo } className = "App-logo" alt = "logo" />
            </div>
        );
    }
}

export default App;

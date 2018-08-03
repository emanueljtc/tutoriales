import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Componentes
import LocationList from './components/LocationList';
// Assets
import './App.css';
const cities = [
  'Buenos Aires,ar',
  'Miami,us',
  'Bogota,co',
  'London,gb',
  'Madrid,es',
  'Caracas,ve',
  'Santiago,cl'
];
class App extends Component {
    handleSelectedLocation = city => {
      console.log(`handleSelectedLocation ${city}`);
    }
    render() {
        return (
           <MuiThemeProvider>
              <div className = "App">
                <LocationList cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}/>
              </div>
           </MuiThemeProvider>
        );
    }
}

export default App;

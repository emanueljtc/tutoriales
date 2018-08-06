import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
// Componentes
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
    constructor() {
      super();
      this.state = { city: 'Nueva Ciudad!'};
    }
    handleSelectedLocation = city => {
      this.setState({ city })
      console.log(`handleSelectedLocation ${city}`);
    }
    render() {
        const {city} = this.state;
        return (
           <MuiThemeProvider>
           <Grid>
             <Row>
                <Col xs={12} md={12}>
                  <AppBar title="Weather App" />
                </Col>
             </Row>
             <Row>
                <Col xs={12} md={6}>
                  <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
                </Col>
                <Col xs={12} md={6}>
                    <Paper zDepth={4}>
                      <div className="detail">
                        <ForecastExtended city={city}/>
                      </div>
                    </Paper>
                </Col>
             </Row>
           </Grid>
           </MuiThemeProvider>
        );
    }
}

export default App;

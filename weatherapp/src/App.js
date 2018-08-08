// Dependencies
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

// Componentes
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

//Actions
import { setCity } from './actions';
//store
import  {store} from './store'
// Assets
import './App.css';
const cities = [
  'Buenos Aires,ar',
  'Miami,us',
  'Bogota,co',
  'Madrid,es',
  'Caracas,ve',
  'Villa de Cura,ve'
];

class App extends Component {
    constructor() {
      super();
      this.state = { city: null };
    }
    handleSelectedLocation = city => {
      this.setState({ city })
      console.log(`handleSelectedLocation ${city}`);
      store.dispatch(setCity(city));
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
                        {
                          city &&
                            <ForecastExtended city={city}/>
                        }
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

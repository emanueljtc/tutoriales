import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
           <Grid>
             <Row>
              Titulo
             </Row>
             <Row>
                <Col xs={12} md={6}>
                  <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail">
                    </div>
                </Col>
             </Row>
           </Grid>
           </MuiThemeProvider>
        );
    }
}

export default App;

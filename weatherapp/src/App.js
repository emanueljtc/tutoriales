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
              <Grid fluid>
                <Row>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="red"></div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className='green'></div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className='blue'></div>
                  </Col>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className='green'></div>
                  </Col>
                </Row>
              </Grid>
           </MuiThemeProvider>
        );
    }
}

export default App;

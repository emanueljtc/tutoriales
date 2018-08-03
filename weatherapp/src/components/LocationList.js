import React from 'react';
import WeatherLocation from './WeatherLocation';
const LocationList = () => (
    <div>
      <WeatherLocation city={'Buenos Aires,ar'} />
      <WeatherLocation city={'Bogotá,co'} />
      <WeatherLocation city={'Santiago,cl'} />

    </div>
);

export default LocationList;

import React from 'react';
import WeatherLocation from './WeatherLocation';
const LocationList = () => (
    <div>
      <WeatherLocation city={'Buenos Aires,ar'} />
      <WeatherLocation city={'Santiago,cl'} />
      <WeatherLocation city={'Caracas,ve'} />
      <WeatherLocation city={'Villa de Cura,ve'} />

    </div>
);

export default LocationList;

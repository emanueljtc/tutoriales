import React from 'react'

const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span>{`${humidity} % | `}</span> // Template String
    <span>{`${wind} wind`}</span>
  </div>
);

export  default WeatherExtraInfo;

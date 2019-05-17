import React from 'react';
import moment from 'moment';

import { calculateKelvinInCelsius } from './helpers';

const WeatherItem = (props) => {
  const { 
    dt, 
    main: { temp },
    weather: [ { icon } ]
  } = props;

  const iconSrc = `http://openweathermap.org/img/w/${icon}.png`;
  
  return (
    <div className="fc">
      <div className="fcTime">{moment(dt * 1000).format('DD.MM.YYYY в HH:mm')}</div>
      <div>
        <img src={iconSrc} className="fcIcon" alt="" />
      </div>
      <div className="fcTemp">{calculateKelvinInCelsius(temp)} °C</div>
    </div>
  )
}

export default WeatherItem;
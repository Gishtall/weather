import React from 'react';

import WeatherItem from './WeatherItem';

const WeatherOther = (props) => {
  const { array } = props;
  const filteredArr = array.filter((item, i) => i % 8 === 0);
  
  return (
    <div className="forecast">
      {filteredArr.map((item, index) => <WeatherItem key={index} {...item} />)}
    </div>
  )
}

export default WeatherOther;
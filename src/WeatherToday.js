import React from 'react';
import moment from 'moment';

import { getDirectionByDegree, calculateKelvinInCelsius } from './helpers';

const WeatherToday = (props) => {
  const { item, city, country } = props;

  if (!item) return (<div>Загрузка ...</div>);

  const iconSrc = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
  
  return (
    // <form onSubmit={this.props.WeatherToday}>
    //        <input type="text" name="city" placeholder="city"></input>
    //        <button>Get weather</button>
    //      </form>
    <div className="weather">
      <div className="divInfo">
        <div className="city"><input type="text" name="city" placeholder={city} ></input></div>
        <button >get weather</button>
        <div>{moment(item.dt * 1000).format('DD.MM.YYYY в HH:mm')}</div>
      </div>
      <div className="divWeather">
        <img src={iconSrc} className="weatherIcon" alt="" />
        <div>{item.weather[0].main}</div>
        <div className="temp">{calculateKelvinInCelsius(item.main.temp)} °C</div>
      </div>
      <div className="divWind">
        <div className="wind">{getDirectionByDegree(item.main.temp)}</div>
        <div className="wind">{item.wind.speed} m/s</div>
      </div>
    </div>
  )
}

export default WeatherToday;



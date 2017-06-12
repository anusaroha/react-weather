import axios from 'axios';

const API_KEY = 'c4f07aa5891942b0db80ea318c1197ab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},can`;
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request
  };
}

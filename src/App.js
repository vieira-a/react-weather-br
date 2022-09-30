//Hooks
import React, { useState } from 'react'

//CSS
import './App.css';

//Data
import { cityUrls } from './data/city'

//Components
import Forecast from'./components/Forecast'

//Getting all urls

function App() {
  
  let [baseUrls, setBaseUrls] = useState([])
  let [database, setDatabase] = useState([])



  cityUrls.map((urls)=>(
    baseUrls.push(urls.url)  
  ))

  baseUrls.map((url)=>(

    fetch(url)
    .then(res => res.json())
    .then(data => database.push({
      city: data.results.city,
      temp: data.results.temp, 
      condition: data.results.forecast[0].description,
      max: data.results.forecast[0].max,
      min: data.results.forecast[0].min,
      term: data.results.temp,
      wind: data.results.wind_speedy,
      humidity: data.results.humidity
    })
    )))

  return (
    <>
      <Forecast database={database}/>
    </>
  );
}

export default App;

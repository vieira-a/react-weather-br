//Hooks
import React, { useState } from 'react'

//CSS
import './App.css';

//Data
import { cityUrls } from './data/city'

//Components
import Forecast from'./components/Forecast'

//Getting all urls
let baseUrls = []
cityUrls.map((urls)=>(
  baseUrls.push(urls.url)
  
  ))
  console.log(baseUrls)

// const getInitialCities = () =>{
//   const indexCities = Object.keys(cityUrls)
//   const indexCity = indexCities[Math.floor(Math.random() * Object.keys(indexCities).length)]
//   indexCity.slice(0, 8)
//   console.log(indexCity)
// }
// getInitialCities()


function App() {

  //PROTOTYPE: MORE THAN 1 CITY
  let database = []
  //const urls = ['https://api.hgbrasil.com/weather?woeid=455826&format=json-cors&key=d09c56dc','https://api.hgbrasil.com/weather?woeid=455830&format=json-cors&key=d09c56dc']
  
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
    console.log(database)
    
  //PROTOTYPE: 1 CITY - OK
  
  // const url = 'https://api.hgbrasil.com/weather?woeid=455826&format=json-cors&key=d09c56dc'

  // let database = []
  // async function getForecast() {
    
  //   const response = await fetch(url) 

  //   let data = await response.json()

  //   database.push({
      // city: data.results.city,
      // temp: data.results.temp, 
      // condition: data.results.forecast[0].description,
      // max: data.results.forecast[0].max,
      // min: data.results.forecast[0].min,
      // term: data.results.temp,
      // wind: data.results.wind_speedy,
      // humidity: data.results.humidity
  //   })

  //   console.log(database)

  // } 

//  getForecast()

  return (
    <>
      <Forecast database={database}/>
    </>
  );
}

export default App;

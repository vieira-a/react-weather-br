//Hooks
import React, { useState } from 'react'

//CSS
import './App.css';

//Data
import { cityUrls } from './data/city'

//Components
import Forecast from'./components/Forecast'
import ForecastDetails from'./components/ForecastDetails'

//Create link pages

const pages = [
  {id: 0, name: 'main'},
  {id: 1, name: 'details'}
]



function App() {
  
  const [page, setPage] = useState(pages[0].name)

  let [baseUrls, setBaseUrls] = useState([])
  let [database, setDatabase] = useState([])
  let [databaseId, setDatabaseId] = useState()

  const handleClick = event => {
    setDatabaseId(event.currentTarget.id)
    setPage(pages[1].name)
  };

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
    {page === 'main' && <Forecast database={database} handleClick={handleClick} />}
    {page === 'details' && <ForecastDetails database={database} databaseId={databaseId} />}
    </>
  );
}

export default App;

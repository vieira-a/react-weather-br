//Hooks
import React, { useState } from 'react'

//CSS
import './App.css';

//Data
import { cityUrls } from './data/city'

//Components
import Forecast from'./components/Forecast'
import ForecastDetails from'./components/ForecastDetails'
import Header from './components/Header';

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

  const getData = () => {
    
    baseUrls.map((url)=>(
      
      fetch(url)
      .then(res => res.json())
      .then(data => database.push({
        city: data.results.city,
        temp: data.results.temp,
        forecast: [
          {
            date: data.results.forecast[0].date,
            weekday: data.results.forecast[0].weekday, 
            max: data.results.forecast[0].max,
            min: data.results.forecast[0].min,
            condition: data.results.forecast[0].description
          },
          {
            date: data.results.forecast[1].date,
            weekday: data.results.forecast[1].weekday, 
            max: data.results.forecast[1].max,
            min: data.results.forecast[1].min,
            condition: data.results.forecast[1].description
          },
          {
            date: data.results.forecast[2].date,
            weekday: data.results.forecast[2].weekday, 
            max: data.results.forecast[2].max,
            min: data.results.forecast[2].min,
            condition: data.results.forecast[2].description
          },
          {
            date: data.results.forecast[3].date,
            weekday: data.results.forecast[3].weekday, 
            max: data.results.forecast[3].max,
            min: data.results.forecast[3].min,
            condition: data.results.forecast[3].description
          },
          {
            date: data.results.forecast[4].date,
            weekday: data.results.forecast[4].weekday, 
            max: data.results.forecast[4].max,
            min: data.results.forecast[4].min,
            condition: data.results.forecast[4].description
          },
          {
            date: data.results.forecast[5].date,
            weekday: data.results.forecast[5].weekday, 
            max: data.results.forecast[5].max,
            min: data.results.forecast[5].min,
            condition: data.results.forecast[5].description
          }        
        ],
        term: data.results.temp,
        wind: data.results.wind_speedy,
        humidity: data.results.humidity
      })
      )))
  }

  getData()

  return (
    <>
    <Header/>
    {page === 'main' && <Forecast database={database} handleClick={handleClick} />}
    {page === 'details' && <ForecastDetails database={database} databaseId={databaseId} />}
    </>
  );
}

export default App;

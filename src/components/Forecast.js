import React, { useState } from 'react'

//Components
import ForecastDetails from './ForecastDetails'

import './Forecast.css'

//Create link pages
const pages = [
  {id: 0, name: 'main'},
  {id: 1, name: 'details'}
]

const Forecast = ( {database} ) => {
  const [page, setPage] = useState(pages[0].name)
  let [databaseId, setDatabaseId] = useState()
  
  const handleClick = event => {
    setDatabaseId(event.currentTarget.id)
    setPage(pages[1].name)
  };

  return (

    <div className="dataForecast">
      {page === 'details' && <ForecastDetails database={database} databaseId={databaseId} pages={pages} setPage={setPage} />}
      <div className="searchBar">
        <input type="search" name="city" placeholder="Insira aqui o nome da cidade"/>
        <button type="submit"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg></button>
      </div>
      <div className="dataTable">
        <h2>Capitais</h2>
        <table>
          <tbody>
          <tr>
            <th>Min</th>
            <th>Max</th>
          </tr>
        {database.map((data, index)=>(     
          <tr key={index} onClick={handleClick} id={index}>
            <td>{`${data.forecast[0].min}°`}</td>
            <td>{`${data.forecast[0].max}°`}</td>
            <td>{data.city}</td>
          </tr>
      ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Forecast
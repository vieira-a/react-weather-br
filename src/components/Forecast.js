//React Modules
import { BiSearchAlt2 } from "react-icons/bi";
import React, { useState } from 'react'

//Styles
import '../styles/components/Forecast.module.sass'
//Components
import ForecastDetails from './ForecastDetails'

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
    <>
    {page === 'details' && <ForecastDetails database={database} databaseId={databaseId} pages={pages} setPage={setPage} />}
    <div className="container p-4 my-4">
      <section className="searchBar">
        <form>
          <input type="search" name="city" placeholder="Insira aqui o nome da cidade"/>
          <button type="submit" name="search"><BiSearchAlt2/></button>
        </form>
      </section>
      <section className="dataTable">
        <h2>Capitais</h2>
        <table>
          <tbody>
          <tr>
            <th>Min</th>
            <th>Máx</th>
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
      </section>
  
    </div>
  
    </>
  )
}

export default Forecast
import './ForecastDetails.css'

const ForecastDetails = ({database, databaseId}) => {
  
  const databaseDetails = [database[databaseId]]

  return (
    <div className="dataForecastDetails">      
      {databaseDetails.map((data, index)=>(
        <div className="forecastCard" key={index}>
          <div className="header">
            <p>{data.city} - Brasil</p>
            <h2>{data.temp}°C {data.condition}</h2>
          </div>
          
          <div className="thermic">
            <div className="temperature">
              <span>{data.min}°</span>
              <span>{data.max}°</span>
            </div>
            <div className="sense">
              <p>Sensação <span>{data.temp}°C</span></p>
            </div>
            <div className="wind">
              <p>Vento <span>{data.wind}</span></p>
            </div>
            <div className="humidity">
              <p> Humidade <span>{data.humidity}%</span></p>
            </div>
          </div>
        </div>

      ))}

      

      

    </div>
  )
}

export default ForecastDetails
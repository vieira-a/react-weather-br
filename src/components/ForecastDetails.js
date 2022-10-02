import './ForecastDetails.css'

const ForecastDetails = ({database, databaseId}) => {
  
  const databaseDetails = [database[databaseId]]

  console.log(databaseDetails)

  return (
    <>
    <div className="dataForecastDetails">      
      {databaseDetails.map((data, index)=>(
        <div className="forecastCard" key={index}>
          <div className="header">
            <p>{data.city} - Brasil</p>
            <h2>{data.temp}°C {data.forecast[0].condition}</h2>
          </div>
          
          <div className="thermic">
            <div className="temperature">
              <span>{data.forecast[0].min}°</span>
              <span>{data.forecast[0].max}°</span>
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

          <div className="forecastNextDays">
            <div className="next">
              <p>{data.forecast[1].weekday}</p>
              <p>
                <span>{data.forecast[1].min}° </span>
                <span>{data.forecast[1].max}°</span>
              </p>
            </div>
            <div className="next">
              <p>{data.forecast[2].weekday}</p>
              <p>
                <span>{data.forecast[2].min}° </span>
                <span>{data.forecast[2].max}°</span>
              </p>
            </div>
            <div className="next">
              <p>{data.forecast[3].weekday}</p>
              <p>
                <span>{data.forecast[3].min}° </span>
                <span>{data.forecast[3].max}°</span>
              </p>
            </div>
            <div className="next">
              <p>{data.forecast[4].weekday}</p>
              <p>
                <span>{data.forecast[4].min}° </span>
                <span>{data.forecast[4].max}°</span>
              </p>
            </div>
            <div className="next">
              <p>{data.forecast[5].weekday}</p>
              <p>
                <span>{data.forecast[5].min}° </span>
                <span>{data.forecast[5].max}°</span>
              </p>
            </div>
          </div>

        </div>

      ))}
    </div>
    </>
    
  )
}

export default ForecastDetails
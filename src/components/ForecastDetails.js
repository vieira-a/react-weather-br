const ForecastDetails = ({database, databaseId}) => {
  
  const databaseDetails = [database[databaseId]]

  return (
    <div className="dataForecastDetails">
      <h1>Previsão do tempo</h1>
      
      {databaseDetails.map((data, index)=>(
        <div className="forecastCard" key={index}>
          <p>{data.city}</p>
          <h2>{data.temp} {data.condition}</h2>
          <p>{data.min} {data.max} Sensação: {data.temp}</p>
          <p>Vento: {data.wind} Humidade: {data.humidity}</p>
        </div>
        

      ))}

      

      

    </div>
  )
}

export default ForecastDetails
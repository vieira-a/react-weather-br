const Forecast = ({ database }) => {
  return (
    <div>
      <h1>Previsão do tempo</h1>
      
      <div className="forecastData">
        <table>
          <tr>
            <th>Min</th>
            <th>Max</th>
          </tr>
          
        {database.map((data)=>(

          <tr>
            <td>{data.min}</td>
            <td>{data.max}</td>
            <td>{data.city}</td>
          </tr>
        ))}

        </table>
      </div>




    </div>
  )
}

export default Forecast
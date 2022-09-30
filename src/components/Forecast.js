const Forecast = ( {database} ) => {

  console.log(database)
  
  // database.map((data, index)=>(
  //   console.log(index)
  // ))
  
  return (
    <div>
      <h1>Previsão do tempo</h1>
      
      <div className="dataForecast">
        <table>
          <tbody>
          <tr>
            <th>Min</th>
            <th>Max</th>
          </tr>

        {database.map((data, index)=>(
          <tr key={index}>
            <td>{data.min}</td>
            <td>{data.max}</td>
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
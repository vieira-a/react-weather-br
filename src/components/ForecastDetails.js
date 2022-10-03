//Styles
import styles from'../styles/components/ForecastDetails.module.sass'

//Icons
import { IoCloseOutline, IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const ForecastDetails = ({database, databaseId, pages, setPage}) => {
  
  const handleCloseDetails = event => {
    setPage(pages[0].name)
  }

  const databaseDetails = [database[databaseId]]

  console.log(databaseDetails)

  return (
    <>
    
    <div className="container p-4 my-4">
      {databaseDetails.map((data, index)=>(
        <div className="forecastCard" key={index}>
          <div className={styles.cardHeader}>
            <div className={styles.city}>
              {data.city} - Brasil  
            </div>
            <div className={styles.closeCard}>
              <IoCloseOutline onClick={handleCloseDetails}/>
            </div>
          </div>
            <h2>{data.temp}°C {data.forecast[0].condition}</h2>
          <div className={styles.thermic}>
            <div className={styles.temperature}>
              <div className={styles.minTemperature}>
                  <IoArrowDownOutline/>
                  {data.forecast[0].min}°
              </div>
              <div className={styles.maxTemperature}>                
                  <IoArrowUpOutline/>
                  {data.forecast[0].max}°
              </div>
            </div>

            <div className={styles.sense}>
              <p>Sensação {data.temp}°C</p>
            </div>
            <div className={styles.wind}>
              <p>Vento {data.wind}</p>
            </div>
            <div className={styles.humidity}>
              <p> Humidade {data.humidity}%</p>
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
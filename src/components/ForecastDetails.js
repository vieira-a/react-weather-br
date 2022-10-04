//Styles
import styles from'../styles/components/ForecastDetails.module.sass'

//Icons
import { IoCloseOutline, IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const ForecastDetails = ({database, setDatabase, databaseId, pages, setPage}) => {
  
  const handleCloseDetails = event => {
    setPage(pages[0].name)
  }

  const databaseDetails = [database[databaseId]]

  return (
    <>
    
    <div className="container p-3 my-3">
      {databaseDetails.map((data, index)=>(
        <div className={styles.forecastCard} key={index}>
          <div className={styles.cardHeader}>
            <div className={styles.city}>
              <span>{data.city}</span>
            </div>
            <div className={styles.closeCard}>
              <IoCloseOutline onClick={handleCloseDetails}/>
            </div>
          </div>
            <h2>{data.temp}°C {data.forecast[0].condition}</h2>
          <div className={styles.thermic}>
            <div className={styles.temperature}>
              <div className={styles.minTemperature}>
                  <span className={styles.arrowTemp}><IoArrowDownOutline/></span>
                  <span className={styles.data}>{data.forecast[0].min}°</span>
              </div>
              <div className={styles.maxTemperature}>                
                  <span className={styles.arrowTemp}><IoArrowUpOutline/></span>
                  <span className={styles.data}>{data.forecast[0].max}°</span>
              </div>
            </div>

            <div className={styles.sense}>
              <span>Sensação</span>
              <span className={styles.data}>{data.temp}°C</span>
            </div>
            <div className={styles.wind}>
              <span>Vento</span>
              <span className={styles.data}>{data.wind}</span>
            </div>
            <div className={styles.humidity}>
              <span>Humidade</span>
              <span className={styles.data}>{data.humidity}%</span>
            </div>
          </div>
          <div className={styles.forecastNextDays}>
            
            <div className={styles.next}>
              <span>{data.forecast[1].weekday}</span>
              <div className={styles.nextTemperatures}>
                <span className={styles.data}>{data.forecast[1].min}° </span>
                <span className={styles.data}>{data.forecast[1].max}°</span>
              </div>
            </div>

            <div className={styles.next}>
              <span>{data.forecast[2].weekday}</span>
              <div className={styles.nextTemperatures}>
                <span className={styles.data}>{data.forecast[2].min}° </span>
                <span className={styles.data}>{data.forecast[2].max}°</span>
              </div>
            </div>

            <div className={styles.next}>
              <span>{data.forecast[3].weekday}</span>
              <div className={styles.nextTemperatures}>
                <span className={styles.data}>{data.forecast[3].min}° </span>
                <span className={styles.data}>{data.forecast[3].max}°</span>
              </div>
            </div>

            <div className={styles.next}>
              <span>{data.forecast[4].weekday}</span>
              <div className={styles.nextTemperatures}>
                <span className={styles.data}>{data.forecast[4].min}° </span>
                <span className={styles.data}>{data.forecast[4].max}°</span>
              </div>
            </div>

            <div className={styles.next}>
              <span>{data.forecast[5].weekday}</span>
              <div className={styles.nextTemperatures}>
                <span className={styles.data}>{data.forecast[5].min}° </span>
                <span className={styles.data}>{data.forecast[5].max}°</span>
              </div>
            </div>

          </div>

        </div>

      ))}
    </div>
    </>
    
  )
}

export default ForecastDetails
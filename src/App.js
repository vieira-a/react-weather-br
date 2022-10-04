//Styles
import '../src/styles/main.sass'

//Data
import { cityUrls } from './data/city'

//Components
import ForecastHeader from './components/ForecastHeader';
import Forecast from'./components/Forecast'


function App() {
  
  let baseUrls = []
  let database = []

  const getUrls = () => {
    cityUrls.map((urls)=>(
      baseUrls.push(urls.url)  
    ))
  }

  getUrls()

  async function fetchUrls(){
    try{
      await Promise.all([
        baseUrls.map((url)=>(fetch(url)
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
        }))
        ))
      ])

    } catch (err){
      console.log(err)
    }
  }

  fetchUrls()

  // baseUrls.map((url)=>(
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => database.push({
  //     city: data.results.city,
  //     temp: data.results.temp,
  //     forecast: [
  //       {
  //         date: data.results.forecast[0].date,
  //         weekday: data.results.forecast[0].weekday, 
  //         max: data.results.forecast[0].max,
  //         min: data.results.forecast[0].min,
  //         condition: data.results.forecast[0].description
  //       },
  //       {
  //         date: data.results.forecast[1].date,
  //         weekday: data.results.forecast[1].weekday, 
  //         max: data.results.forecast[1].max,
  //         min: data.results.forecast[1].min,
  //         condition: data.results.forecast[1].description
  //       },
  //       {
  //         date: data.results.forecast[2].date,
  //         weekday: data.results.forecast[2].weekday, 
  //         max: data.results.forecast[2].max,
  //         min: data.results.forecast[2].min,
  //         condition: data.results.forecast[2].description
  //       },
  //       {
  //         date: data.results.forecast[3].date,
  //         weekday: data.results.forecast[3].weekday, 
  //         max: data.results.forecast[3].max,
  //         min: data.results.forecast[3].min,
  //         condition: data.results.forecast[3].description
  //       },
  //       {
  //         date: data.results.forecast[4].date,
  //         weekday: data.results.forecast[4].weekday, 
  //         max: data.results.forecast[4].max,
  //         min: data.results.forecast[4].min,
  //         condition: data.results.forecast[4].description
  //       },
  //       {
  //         date: data.results.forecast[5].date,
  //         weekday: data.results.forecast[5].weekday, 
  //         max: data.results.forecast[5].max,
  //         min: data.results.forecast[5].min,
  //         condition: data.results.forecast[5].description
  //       }        
  //     ],
  //     term: data.results.temp,
  //     wind: data.results.wind_speedy,
  //     humidity: data.results.humidity
  //   })
  //   )))
  
  return (
    <>
    <ForecastHeader/>
    <Forecast database={database} fetchUrls={fetchUrls} />
    </>
  );
}

export default App;

import React, {useState, useEffect} from 'react'

export default function Weather() {
    const [weatherData, setWeatherData] = useState({})
    const [location, setLocation] = useState({
        city: ''
    })
    const [preLocation, setPreLocation] = useState({city: ''})
    const [displayedData, setDisplayedData] = useState('there will be prognosis')
     

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=706c1d844460431da1935535222307&q=Tomsk&days=7&aqi=no&alerts=no`)
            .then(response => response.json())
            .then(response => setWeatherData(response))
            .catch(err => console.log(`this is your ${err}`))
            console.log('renders')
    }, [location]) 
    console.log(weatherData)

  

    useEffect(() => {
        if(weatherData.current) {
            setDisplayedData(
                <div>
                <div>
                    <p className="location">Weather in {weatherData.location.name}, {weatherData.location.country}</p>
                    <div className="weather-data">
                        <h3>{weatherData.current.temp_c}°C</h3>
                        <h3>{weatherData.current.condition.text}</h3>
                        <img src={weatherData.current.condition.icon} />
                    </div>
                </div>

                <div className="prognosis">
                     <div className="weather-data">
                        <p>{weatherData.forecast.forecastday[0].date}</p>
                        <p>{weatherData.forecast.forecastday[0].day.avgtemp_c} °C </p>
                        <p>{weatherData.forecast.forecastday[0].hour[12].condition.text}</p>
                        <img src={weatherData.forecast.forecastday[0].hour[12].condition.icon} />
                    </div>
                    <div className="weather-data">
                        <p>{weatherData.forecast.forecastday[1].date}</p>
                        <p>{weatherData.forecast.forecastday[1].day.avgtemp_c} °C </p>
                        <p>{weatherData.forecast.forecastday[1].hour[12].condition.text}</p>
                        <img src={weatherData.forecast.forecastday[1].hour[12].condition.icon} />
                    </div>
                    <div className="weather-data">
                        <p>{weatherData.forecast.forecastday[2].date}</p>
                        <p>{weatherData.forecast.forecastday[2].day.avgtemp_c} °C </p>
                        <p>{weatherData.forecast.forecastday[2].hour[12].condition.text}</p>
                        <img src={weatherData.forecast.forecastday[2].hour[12].condition.icon} />
                    </div>

                    

                    

                </div>
                </div>
            )
        }
    }, [weatherData])


    function handleSubmit(event) {
        event.preventDefault()
        setLocation(preLocation)
    }

    function handleChange(event) {
        const {value} = event.target
        setPreLocation({city: value})
    }
        return (
            <div>
           
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your city"
                onChange={handleChange}
                name="city"
                value={preLocation.city}
            />
             
                <button>Get weather</button>
            </form>

            <div>
                {displayedData}
            </div>
       
            
        
            
            </div>
        )
}
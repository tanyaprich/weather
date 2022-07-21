import React, {useState, useEffect} from 'react'

export default function Weather() {
    const [weatherData, setWeatherData] = useState()
    const [location, setLocation] = useState({
        city: 'Tomsk'
    })
    

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '723d3f7e03msh653febbac59a6c7p16e25djsnfb1c65d1fa91',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };
        
        fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location.city}&format=json&u=c`, options)
            .then(response => response.json())
            .then(response => setWeatherData(response))
    
    }, [location]) 





    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        const {name, value} = event.target
        setLocation(prevLocation => {
            return {
                ...prevLocation,
                [name]:  value
            }
        })
    }

    
        
           
    


 

        return (
            <div>
           
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your city"
                onChange={handleChange}
                name="city"
                value={location.city}
            />
             
                <button>Get weather</button>
            </form>


            <main>
             {weatherData && 
             <div className="weather-card">
             <p>{weatherData.location.city}, {weatherData.location.region}</p>
            <div className="weather-now weather">
                <h2>{weatherData.current_observation.condition.temperature}°С </h2>
                <h2>{weatherData.current_observation.condition.text}</h2>
                <h2>Wind: {weatherData.current_observation.wind.speed} m/s</h2>
                <h2>Pressure: {weatherData.current_observation.atmosphere.pressure}</h2>
            </div>
             </div>
            }   
    
            
            </main>
            </div>
        )
}
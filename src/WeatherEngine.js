import "./WeatherEngine.css";
import React, { useState } from "react";
import axios from 'axios';

export default function WeatherEngine(props) {
const [city, setCity] = useState("");
const [temp, setTemp] = useState(null);
const [description, setDescription] = useState(null)
const [humidity, setHumidity] = useState(null)
const [wind, setWind] = useState(null)
const [icon, setIcon] = useState()




    function handleResponse(response) {
        console.log(response.data);
        setCity(response.data.name);
        setTemp(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(Math.round(response.data.wind.speed)); 
        setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

    }

    function search() {

       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ea9a418f9dd13e967a728a357801a35&units=metric`
       axios.get(apiUrl).then(handleResponse)  
    }
    
    
    function handleChange(event) {
        event.preventDefault()
        console.log(event.target.value)
        setCity(event.target.value)

    }
         
    function handleSubmit(event) {
       event.preventDefault() 
       search()
    }

    function showFahrenheit(event) {
        event.preventDefault();
        
        setTemp(Math.round((temp * 9/5) + 32))  
    }      

    function showCelsius(event) {
        event.preventDefault();
        
        setTemp(Math.round((temp - 32) * 5/9))
       
    }

    
    return (

        <div className = "WeatherEngine">
            

            <h2>React Weather Engine</h2>
            
 
            <form  onSubmit={handleSubmit}>
                <div class="form-group" >
                    <div className='row'>
                        <div className='col-9'>
                          <input
                          type="search"
                          className="form-control"
                          placeholder="Enter a city name"
                          onChange={handleChange}
                          />    
                        </div>
                        <div className='col-3'>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                      </div>
                </div>
            </form>

            <div className='row cityName'>
                <div className='col-12'>
                    <h3>
                        {city}
                    </h3>
                </div>   
            </div>


            

            <div className='row'>
                <div className='col'>
                   <img src={icon} alt="weather icon" ></img> 
                </div>  
                <div className='col'>
                    {temp} 
                </div>
                <div className='col'>
                    <span className="celsius">
                        <a href="/" onClick={showCelsius}>
                            °C
                        </a>
                    </span>    
                     |
                    <span>
                        <a href="/" onClick={showFahrenheit}>
                            °F
                        </a> 
                    </span> 
                    
                    
                </div>

                <div className='col-6'>
                    <ul>
                        <li>
                            Description: {description}
                        </li>
                         <li>
                            Humidity: {humidity}%
                        </li>

                         <li>
                            Wind: {wind} km/h
                        </li>
                    </ul>
                </div>

            </div>




            
        </div> 
       
    
       
    )  
}
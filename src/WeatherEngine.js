import "./WeatherEngine.css";
import React, { useState } from "react";

export default function WeatherEngine() {

    return(

        <div className = "WeatherEngine">

            <h2>React Weather Engine</h2>



            <form>
                <div class="form-group" >
                    <div className='row'>
                        <div className='col-9'>
                          <input type="text" class="form-control" placeholder="Enter a city name"/>    
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
                        Brisbane
                    </h3>
                </div>   
                <div className='col-12'>
                    <p>
                        <strong>Saturday, 05:00pm</strong>
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-2'>
                <img src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudly"></img>    
                </div>  
                <div className='col'>
                    22 °C | °F
                </div>
                <div className='col-6'>
                    <ul>
                        <li>
                            Precipitation: 2%
                        </li>
                         <li>
                            Humidity: 72%
                        </li>

                         <li>
                            Wind: 8 km/h
                        </li>
                    </ul>
                </div>

            </div>




            
        </div> 
        
    ) 
}
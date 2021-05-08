import "./WeatherEngine.css";
import React from "react";

export default function WeatherEngine() {

    return(

        <div className = "WeatherEngine">

            <h2>React Weather Engine</h2>

            <form>

                <div class="form-group">

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
            
        </div> 
        
    ) 
}
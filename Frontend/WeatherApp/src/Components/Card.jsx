import React, { useState } from "react";
import axios from 'axios'

export const Weather = () => {
    const [city,setcity]=useState();
    const[weather,setweather]=useState();
    const handlecitychanges=(event)=>{
        setcity(event.target.value)
    }
    const fetchWeather = async()=>{
        try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'176791fd579330fe1518dfa8ce0571c1'}`);
            setweather(response);
           
        }
        catch(error){
            alert("some errors in fetching weather-reports");

        };
     
    }
    const handleclick=()=>{
        fetchWeather();
        
    }
    const clearinput=()=>{
        setcity("");
        setweather("");
    }
   
   
  return <>
      <div className="box">
        <h1>Weather-App</h1>
        <div className="container">
          {/* <label>Enter City Name</label> */}
          <input type="text" className="name" value={city} placeholder="Your City Name..." onChange={handlecitychanges}></input>
          <button className="remove" onClick={clearinput}>X</button>
         
        </div>
        <button className="getweather" onClick={handleclick}>Get Weather</button>
        {weather && (<>
        <div className="message">
            <h2>{weather.data.name}</h2>
            <h2>Temp : {((weather.data.main.temp)-273).toFixed(2)}</h2>
            <h2>Wind Speed : {weather.data.wind.speed}</h2>
            <h2 className="desc">{weather.data.weather[0].description}</h2>
        </div>
        </>)}
       
      </div>
  
  </>
  }


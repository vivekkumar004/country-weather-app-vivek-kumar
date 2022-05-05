import React,{useState,useEffect} from 'react';
import axios from 'axios';


const PrintCapitalDetails=()=> {
    const capital=localStorage.getItem('capitalName')?.toLowerCase();

    const[temperature,setTemperature]=useState('');
const[weatherIcon,setWeatherIcon]=useState('');
const[windspeed,setWindspeed]=useState('');
const[timeZoneId,setTimeZoneId]=useState('');

    function PrintingDetails(){
    axios
    .get(`http://api.weatherstack.com/current?access_key=2c503e42a6c1a3ae7022c8fc68a0daf2&query=${capital}
    `)
    .then((response) =>{ setTemperature(response.data["current"]["temperature"])
                        setWeatherIcon(response.data["current"]["weather_icons"][0])
                        setWindspeed(response.data["current"]["wind_speed"])
                        setTimeZoneId(response.data["location"]["timezone_id"])
    })
    .catch(error => alert("Invalid Capital"));
}
useEffect(()=>PrintingDetails,[]);
const capitalName =capital;

return(
    <div className="container">
       <h2> The details of the Capital {capital} are mentioned below </h2>
       <ul>
           <li>
           The temperature is : {temperature}
           </li>
           <li>
               The Weather Icon is : 
           </li>
           <li>
           <img src={weatherIcon} alt="Not available" height="110" width="110"/>
           </li>
           <li>
               Wind speed is : {windspeed}

           </li>
           <li>
               The time zone is : {timeZoneId}
           </li>
         
       </ul>
    </div>
)
}

export default PrintCapitalDetails;


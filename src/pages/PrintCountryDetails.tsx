import React,{useState,useEffect} from 'react';
import "./PrintCountryDetails.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const PrintCountryDetails=()=>{
const country=localStorage.getItem('storeValue');
const[capitalPopulation,setCapitalPopulation]=useState('');
const[latitude,setLatitude]=useState('');
const[longitude,setLongitude]=useState('');
const[flag,setFlag]=useState('');
const[capital,setCapital]=useState('');
const navigator=useNavigate();


    function PrintingDetails(){
    axios
    .get(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) =>{ setCapitalPopulation(response.data[0]["population"])
                        setCapital(response.data[0]["capital"])
                        setLatitude(response.data[0]["latlng"][0])
                        setLongitude(response.data[0]["latlng"][1])
                        setFlag(response.data[0]["flags"]["svg"])


})
    .catch(error => alert("Invalid Country"));
    }
    useEffect(()=>PrintingDetails,[]);
    const capitalName =capital;
    localStorage.setItem('capitalName', capitalName);

    return(
         <div className="container">
            <h2> The details of the country {country} are mentioned below </h2>
            <ul>
                <li>
                The population of the country is : {capitalPopulation}
                </li>
                <li>
                    Latitude is : {latitude}
                </li>
                <li>
                    Longitude is : {longitude}
                    <br/><br/>
                    The Flag of {country} is :

                </li>
                <li>
                    <img src={flag} alt="Not available" height="150" width="150"/>
                </li>
                <li>
                    The Capital is a button which when clicked shows you some more Information :
                        {/* <form onSubmit={()=>navigator('capitalDetails')}> */}

                    <button onClick={()=>navigator('capitalDetails')} className="capital-btn" type="button" value={capital}>{capital}</button>
               {/* </form> */}
                </li>
            </ul>
         </div>
    )
};



export default PrintCountryDetails;
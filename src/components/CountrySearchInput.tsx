import React from 'react';
import './CountrySearchInput.css';
import {useNavigate} from "react-router-dom";


const CountrySearchInput = ({Validate}:any)=>{
    function InputValidator(event: React.ChangeEvent<HTMLInputElement>){
        const inputValue=event.target.value;
        localStorage.setItem('storeValue', inputValue.toLocaleLowerCase());

        const inputSubmit=document.getElementById('btn');
        const nonCharacters=/[0-9]|\W/g;
        if(inputValue===""||inputValue.match(nonCharacters))
        {
           ( inputSubmit as HTMLButtonElement).disabled=true;
        }
        else{
            ( inputSubmit as HTMLButtonElement).disabled=false;
        }
    }
    const navigator=useNavigate();
    return <div id="whole">
<h2 id="heading">Country's Capital and Current Weather</h2>
    <form onSubmit={()=>navigator('countryDetails')}>
         <input placeholder='Country Name' onChange={InputValidator} id='searchBox' type='text'  />
         <button id="btn" type="submit" disabled>Submit</button>
    </form>
</div>
}

export default CountrySearchInput;
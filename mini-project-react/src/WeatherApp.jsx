import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Bhadrak",
        feelsLike:33.02,
        temp:30.1,
        humidity:60,
        tempMax:30.1,
        tempMin:30.1,
        weather:"few clouds"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather Of Your City</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
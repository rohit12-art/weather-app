import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import styled from "styled-components";
import CityComponent from './components/CityComponent';
import WeatherInfoComponent from './components/WeatherInfoComponent';

const API_KEY = "d215b17398a2606edab5911f93361c47";


export const WeatherIcons = {
  "01d": "/icons/sunny.SVG",
  "01n": "/icons/night.SVG",
  "02d": "/icons/day.SVG",
  "02n": "/icons/cloudy-night.SVG",
  "03d": "/icons/cloudy.SVG",
  "03n": "/icons/cloudy.SVG",
  "04d": "/icons/perfect-day.SVG",
  "04n": "/icons/cloudy-night.SVG
  "09d": "/icons/rain.SVG
  "09n": "/icons/rain-night.SVG
  "10d": "/icons/rain.SVG
  "10n": "/icons/rain-night.SVG
  "11d": "/icons/storm.SVG
  "11n": "/icons/storm.SVH
};


const Container =styled.div`
display:flex;
flex-direction: column;
margin:auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
padding:20px 10px;
border-radious:4px;
width:380px;
background: white;
font-family: 'Montserrat'
`
const AppLabel =styled.span`
color:black;
font-size: 18px;
font-weight:bold;
`

function App() {
  const [city,setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    setWeather(response.data);
  }
  return (
    <Container>
     <AppLabel>React Weather App</AppLabel> 
     {weather ? (
       <WeatherInfoComponent weather={weather} />
       ) : (
     <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
       )}
    </Container>
  );
}

export default App;

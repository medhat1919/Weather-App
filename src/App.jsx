import { useState } from 'react'
 import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const apiKey=import.meta.env.VITE_WEATHER_API_KEY

  const fetshweather= async ()=> {
    try {
      const response = 
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey} &q=${city}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  

  return (
     <div className="weather w-2xl border-2 border-amber-900 flex flex-col justify-center items-center p-8 bg-black rounded-3xl text-white">
     <h1 className='text-4xl text-white p-12'>Weather App</h1>

     <input className= 'font-bold text-white p-3 rounded-lg border-2 border-amber-900 w-2/3 outline-none bg-black'
     
      type="text" placeholder="Enter city name" value={city} 
     onChange={(e) => setCity(e.target.value)} />

     <button className='font-bold text-white p-3 rounded-lg border-2 border-amber-900 mt-7 mb-7 cursor-pointer hover:bg-amber-900 transition-colors'   onClick={fetshweather}>Search</button>
     {weather&&(
      <div className=''flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl m-4 w-full>
        <h2 className='text-white text-3xl m-2'>{weather.location.name} , {weather.location.country}</h2>
        <p className='text-white m-4' > <img className='w-17 h-17' src={weather.current.condition.icon} alt= {weather.current.condition.text}/> {weather.current.condition.text}</p>
        <p className='text-white text-2xl m-4' >Temperature: {weather.current.temp_c}°C</p>
        <p     className='text-white text-xl m-4 '>Condition: {weather.current.condition.text}</p>
      </div>
     )}









     </div>
  )
}

export default App

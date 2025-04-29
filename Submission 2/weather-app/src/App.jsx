import { useState } from 'react';
import SearchForm from './component/SearchForm';
import WeatherDisplay from './component/WeatherDisplay';
import Loading from './component/Loading';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '18e32efd1b0c9b2b5e312ae54a0b695a';

  const fetchWeather = async () => {
    setLoad(true);
    setError(null);
    setWeather(null);
    
    try {
      // Mengambil data cuaca utama
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Kota tidak ditemukan');
      }

      const data = await response.json();

      // Mengambil data ramalan cuaca (forecast)
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5`
      );

      if (!forecastResponse.ok) {
        throw new Error('Gagal mengambil ramalan cuaca');
      }

      const forecastData = await forecastResponse.json();

    
      setWeather({
        ...data,
        forecast: forecastData.list
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>

      <SearchForm 
        city={city} 
        setCity={setCity} 
        fetchWeather={fetchWeather} 
      />

      {load && <Loading />}    
      {error && <p className="error-message">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />} 
    </div>
  );
}

export default App;

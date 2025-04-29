import '../App.css';
import WeatherIcon from './Weathericon';

function WeatherDisplay({ weather }) {
  const forecast = weather.forecast;
  const daysForecast = [];

  for (let i = 0; i < forecast.length; i += 8) {
    daysForecast.push(forecast[i]);
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
          <h2 className="weather-title">Cuaca di {weather.name} Hari Ini</h2>
        </div>
      <div className="weather-now">
        

        <div className="current-weather-container">
          <div className="weather-icon-container">
            <WeatherIcon code={weather.weather[0].icon} />
          </div>

          <div className="weather-detail">
            <span className="weather-detail-label">Suhu:</span>
            <span className="weather-detail-value">{weather.main.temp}°C</span>
          </div>

          <div className="weather-detail">
            <span className="weather-detail-label">Cuaca:</span>
            <span className="weather-detail-value">{weather.weather[0].description}</span>
          </div>

          <div className="weather-detail">
            <span className="weather-detail-label">Kecepatan Angin:</span>
            <span className="weather-detail-value">{weather.wind.speed} m/s</span>
          </div>

          <div className="weather-detail">
            <span className="weather-detail-label">Kelembapan:</span>
            <span className="weather-detail-value">{weather.main.humidity}%</span>
          </div>
        </div>
      </div>
      

      <div className="forecast-section">
        <h3 className="section-title">Ramalan Cuaca 5 Hari Ke Depan</h3>
        <div className="forecast-grid">
          {daysForecast.map((forecastItem, index) => (
            <div key={index} className="forecast-day-card">
              <div className="weather-icon-container">
                <WeatherIcon code={forecastItem.weather[0].icon} />
              </div>
              <div className="forecast-detail">
                <div className="forecast-detail-row">
                  <span className="forecast-detail-label">Suhu:</span>
                  <span className="forecast-detail-value">{forecastItem.main.temp}°C</span>
                </div>
                <div className="forecast-detail-row">
                  <span className="forecast-detail-label">Cuaca:</span>
                  <span className="forecast-detail-value">{forecastItem.weather[0].description}</span>
                </div>
                <div className="forecast-detail-row">
                  <span className="forecast-detail-label">Kecepatan Angin:</span>
                  <span className="forecast-detail-value">{forecastItem.wind.speed} m/s</span>
                </div>
                <div className="forecast-detail-row">
                  <span className="forecast-detail-label">Kelembapan:</span>
                  <span className="forecast-detail-value">{forecastItem.main.humidity}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
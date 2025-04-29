function WeatherIcon({ code }) {
    return (
      <img 
        src={`https://openweathermap.org/img/wn/${code}@2x.png`} 
        alt="Weather icon"
        className="weather-icon"
      />
    );
  }
  
  export default WeatherIcon;
  
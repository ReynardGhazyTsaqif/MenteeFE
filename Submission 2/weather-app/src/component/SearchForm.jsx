import '../App.css';

function SearchForm({ city, setCity, fetchWeather }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Masukkan nama kota"
        className="search-input"
      />
      <button type="submit" className="search-button">Cari Cuaca</button>
    </form>
  );
}

export default SearchForm;

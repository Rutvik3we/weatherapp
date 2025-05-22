import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // 👈 Import the CSS file

function SearchBar() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/forecast/${city}`);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

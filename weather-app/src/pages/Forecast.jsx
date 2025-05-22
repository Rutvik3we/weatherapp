import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../store/weatherSlice';
import ForecastCard from '../components/ForecastCard';
import './Forecast.css';


function Forecast() {
  const { city } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { forecast, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchForecast(city));
    }
  }, [city, dispatch]);

  if (status === 'loading') return <p>Loading forecast...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!forecast || forecast.length === 0) return <p>No forecast data available.</p>;

  const current = forecast[0];
  const nextDays = forecast.slice(1);

  return (
    <div className="container">
      <h2>Weather for {city}</h2>

      <div className="current-weather">
        <h3>Current Weather</h3>
        <h4>{current.date}</h4>
        <img
          src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
          alt={current.description}
        />
        <p>{current.temp}°C</p>
        <p>{current.description}</p>
      </div>

      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {nextDays.map((day, idx) => (
          <ForecastCard key={idx} day={day} />
        ))}
      </div>

      <div
        className="back-link"
        onClick={() => navigate('/')}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && navigate('/')}
      >
        &larr; Back to search
      </div>
    </div>
  );
}

export default Forecast;

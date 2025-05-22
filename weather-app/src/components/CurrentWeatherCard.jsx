// File: src/components/CurrentWeatherCard.jsx

const CurrentWeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>Current Weather in {data.city}</h2>
      <h4>{data.date}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
      />
      <p>{data.temp}°C</p>
      <p>{data.description}</p>
    </div>
  );
};

export default CurrentWeatherCard;

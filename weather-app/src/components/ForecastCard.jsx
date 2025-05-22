const ForecastCard = ({ day }) => {
  return (
    <div className="forecast-card">
      <h4>{day.date}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt={day.description}
      />
      <p>{day.temp}°C</p>
      <p>{day.description}</p>
    </div>
  );
};

export default ForecastCard;

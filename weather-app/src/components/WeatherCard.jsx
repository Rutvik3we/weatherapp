function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h4>{data.date}</h4>
      <p>{data.description}</p>
      <p>Temp: {data.temp}°C</p>
    </div>
  );
}


export default WeatherCard;

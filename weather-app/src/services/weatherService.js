import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Convert UTC date string to Date object adjusted to IST (UTC+5:30)
function convertToIST(dateString) {
  const dateUTC = new Date(dateString + 'Z');
  const ISTOffset = 5.5 * 60 * 60 * 1000;
  return new Date(dateUTC.getTime() + ISTOffset);
}

// Format date as YYYY-MM-DD
function formatDate(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const getForecast = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  const nowIST = new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000);
  const todayIST = formatDate(nowIST);

  const forecastList = response.data.list.map(item => {
    const istDate = convertToIST(item.dt_txt);
    return {
      date: formatDate(istDate),
      hour: istDate.getHours(),
      istDate,
      temp: Math.round(item.main.temp),
      description: item.weather[0].description,
      icon: item.weather[0].icon
    };
  });

  // 1️⃣ Step 1: Get latest available forecast for today
  const todayForecasts = forecastList.filter(item => item.date === todayIST);
  const latestToday = todayForecasts.reduce((latest, item) => {
    return !latest || item.istDate > latest.istDate ? item : latest;
  }, null);

  // 2️⃣ Step 2: Get forecasts for upcoming days at 12 PM (IST)
  const futureForecasts = forecastList
    .filter(item => item.hour >= 11 && item.hour <= 13)
    .filter(item => item.date !== todayIST) // skip today here
    .reduce((acc, item) => {
      if (!acc.some(f => f.date === item.date)) {
        acc.push(item);
      }
      return acc;
    }, []);

  // 3️⃣ Combine today's latest + upcoming days
  const result = latestToday ? [latestToday, ...futureForecasts] : futureForecasts;

  return result;
};


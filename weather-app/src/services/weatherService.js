import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Convert UTC date string to Date object adjusted to IST (UTC+5:30)
function convertToIST(dateString) {
  const dateUTC = new Date(dateString + 'Z'); // treat as UTC
  // Add 5 hours 30 mins in milliseconds
  const ISTOffset = 5.5 * 60 * 60 * 1000;
  return new Date(dateUTC.getTime() + ISTOffset);
}

// Format date as YYYY-MM-DD string
function formatDate(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Main forecast fetching function
export const getForecast = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  // Adjust timestamps to IST and pick items where time is 12:00 (noon) IST
  const dailyForecast = response.data.list
    .map(item => {
      const istDate = convertToIST(item.dt_txt); // Date object in IST
      return {
        date: formatDate(istDate),
        hour: istDate.getHours(),
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon
      };
    })
    .filter(item => item.hour === 12); // only 12:00 noon IST

  // Remove duplicate dates (in case API has multiple entries at 12:00 IST for same day)
  const uniqueByDate = [];
  const seenDates = new Set();
  for (const day of dailyForecast) {
    if (!seenDates.has(day.date)) {
      uniqueByDate.push(day);
      seenDates.add(day.date);
    }
  }

  return uniqueByDate;
};

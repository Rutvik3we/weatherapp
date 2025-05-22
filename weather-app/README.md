# 🌦️ React Weather App

A simple, responsive weather forecasting app built with **React**, **Redux Toolkit**, and the **OpenWeatherMap API**. It displays current weather and a 5-day forecast, with support for **dark/light mode**, a responsive layout, and clean UI styling.

---

## ✨ Features

- 🔍 Search by city name
- 🌤 Current weather & 5-day forecast
- 🌓 Toggle between Dark/Light mode
- 📱 Fully responsive UI
- ⚛️ State managed with Redux Toolkit
- 🌐 React Router v6

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-weather-app.git
cd react-weather-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Set your OpenWeatherMap API key

Create a `.env` file in the root folder:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

You can get a free API key from [https://openweathermap.org/api](https://openweathermap.org/api).

---

## 💻 Run the App Locally

```bash
npm run dev
# or
yarn dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (SearchBar, ForecastCard, etc.)
├── pages/            # Page views (Home, Forecast)
├── services/         # API logic (weatherService.js)
├── store/            # Redux store setup and slice
├── styles/           # App.css and theming
├── App.jsx           # Main component with routing
├── main.jsx          # Entry point
└── index.html        # Root HTML file
```

---

## 🌓 Dark Mode Support

A toggle switch allows switching between **light** and **dark** themes. It stores the preference using `localStorage` and applies via a `theme` class on `<body>`.

---

## 🧪 Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router v6](https://reactrouter.com/)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Vite](https://vitejs.dev/)
- Plain CSS for styling

---

## 📜 Scripts

| Command              | Description               |
|----------------------|---------------------------|
| `npm run dev`        | Start development server  |
| `npm run build`      | Create production build   |
| `npm run preview`    | Preview production build  |

---

## 📦 Deployment

You can deploy this app on platforms like **Netlify**, **Vercel**, or **GitHub Pages**. Ensure the `.env` file is set on your hosting platform with your API key.

---

## 📄 License

This project is licensed under the MIT License.  
© 2025 Rutvik Makwana.

---

## 📬 Contact

Need help or want to collaborate?

📧 makrutvik303@gmail.com  


---
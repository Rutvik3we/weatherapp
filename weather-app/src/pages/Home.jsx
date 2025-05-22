import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';

function Home() {
  return (
    <div className="container">
      <ThemeToggle />
      <h1>Weather App</h1>
      <SearchBar />
    </div>
  );
}

export default Home;

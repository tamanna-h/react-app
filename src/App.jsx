import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      // alert(response);
      // throw new Error('Failed to fetch movies');
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage(`Error fetching movies, please try again later ${error}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <main>
        <div className="pattern"></div>

        <div className="wrapper">
          <header>
            {/* <img src="./hero.png" alt="hero banner" /> */}
            <h1 className="text-gradient">Movies</h1>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h3 className="text-white">{searchTerm}</h3>
          </header>

          <section className="all-movies">
            <h2>All Movies</h2>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;

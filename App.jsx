import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [leaders, setLeaders] = useState([]);

  const loadMovies = async () => {
    const res = await fetch("http://localhost:5000/movies");
    setMovies(await res.json());
  };

  const loadLeaderboard = async () => {
    const res = await fetch("http://localhost:5000/votes/leaderboard");
    setLeaders(await res.json());
  };

  useEffect(() => {
    loadMovies();
    loadLeaderboard();
  }, []);

  return (
    <div>
      <h1>🎬 Movie Voting App</h1>

      <h2>Popular Movies</h2>
      <MovieList movies={movies} refresh={loadMovies} />

      <h2>🏆 Leaderboard</h2>
      <Leaderboard leaders={leaders} />
    </div>
  );
}

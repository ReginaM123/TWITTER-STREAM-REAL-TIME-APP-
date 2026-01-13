import express from "express";
import axios from "axios";
import Movie from "../models/Movie.js";
import { TMDB_API_KEY } from "../config.js";

const router = express.Router();

// Fetch movies from TMDB then store/save in DB
router.get("/import", async (req, res) => {
  const tmdb = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
  );

  const list = tmdb.data.results.map(m => ({
    tmdb_id: m.id,
    title: m.title,
    poster: "https://image.tmdb.org/t/p/w500" + m.poster_path
  }));

  await Movie.deleteMany({});
  await Movie.insertMany(list);
  res.json({ status: "imported", count: list.length });
});

// List movies with votes
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort({ votes: -1 });
  res.json(movies);
});

export default router;

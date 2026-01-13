import express from "express";
import Vote from "../models/Vote.js";
import Movie from "../models/Movie.js";

const router = express.Router();

// Cast a vote
router.post("/", async (req, res) => {
  const { movieId, userId } = req.body;

  // 1 user = 1 vote per movie
  const exists = await Vote.findOne({ movieId, userId });
  if (exists) return res.json({ error: "Already voted" });

  await Vote.create({ movieId, userId });

  await Movie.findByIdAndUpdate(movieId, { $inc: { votes: 1 } });

  res.json({ status: "voted" });
});

// Leaderboard
router.get("/leaderboard", async (req, res) => {
  const leaderboard = await Movie.find().sort({ votes: -1 }).limit(10);
  res.json(leaderboard);
});

export default router;

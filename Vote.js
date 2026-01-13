import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
  movieId: mongoose.Schema.Types.ObjectId,
  userId: String, // simple placeholder (no full auth system)
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Vote", VoteSchema);

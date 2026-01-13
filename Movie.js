import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  tmdb_id: Number,
  title: String,
  poster: String,
  votes: { type: Number, default: 0 }
});

export default mongoose.model("Movie", MovieSchema);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_URI } from "./config.js";

import movieRoutes from "./routes/movies.js";
import voteRoutes from "./routes/votes.js";

mongoose.connect(MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/votes", voteRoutes);

app.listen(PORT, () => console.log("Backend running at port " + PORT));

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './db/connect.js';
import { errorHandler } from './middlewares/error.middlerware.js';
import authRoute from "./routes/auth.route.js";
import moviesRoute from "./routes/movie.route.js";
// import { deleteMovies } from './deleteMovies.js';

dotenv.config();
await connectDB();
// await deleteMovies();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors({
    origin: process.env.CLIENT_DEV_URL,
    allowedHeaders: ["GET", "POST"],
    // credentials: true
}))

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth/v1", authRoute)
app.use("/api/movies/v1", moviesRoute)

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started listening on PORT: ${PORT}`)
})
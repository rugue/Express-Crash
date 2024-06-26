import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import mongoose from "mongoose";
import connectDB from "./db.js";
import db from "./db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 8000;

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/posts", posts);

app.use(notFound);
//Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

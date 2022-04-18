import {Router} from "express";
import {createMovie, deleteMovie, getAllMovies} from "../controllers/MovieController";

export const movieRouter = Router();
movieRouter.get("/movie", getAllMovies);
movieRouter.post("/movie", createMovie);
movieRouter.delete("/movie/:id", deleteMovie);
import {Router} from "express";
import {createMovie, deleteMovie, getAllMovies, getMovie, updateMovie} from "../controllers/MovieController";

export const movieRouter = Router();
movieRouter.get("/getMovies", getAllMovies);
movieRouter.get("/movie/:id", getMovie);
movieRouter.post("/movie", createMovie);
movieRouter.put("/movie/:id", updateMovie);
movieRouter.delete("/movie/:id", deleteMovie);

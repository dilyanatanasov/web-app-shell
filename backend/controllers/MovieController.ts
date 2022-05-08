import {Request, Response} from "express";
import {MovieModel} from "../models/MovieModel";
import {CreateMovieInput} from "../types/CreateMovieInput";

const movieModel = new MovieModel()

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        res.send(await movieModel.getMovies());
    } catch (e) {
        res.status(403).send({
            message: "No movies found"
        })
    }
}

export const getMovie = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        res.send(await movieModel.getMovie(id));
    } catch (e) {
        res.status(403).send({
            message: "No movies found"
        })
    }
}

export const createMovie = async (req: Request, res: Response) => {
    try {
        const createMovieInput: CreateMovieInput = req.body;
        await movieModel.createMovie(createMovieInput);
        res.send({
            message: "Success"
        })
    } catch (e) {
        res.status(403).send({
            message: "Create not successful"
        })
    }
}

export const updateMovie = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const movieData = req.body;
        await movieModel.updateMovie(id, movieData);
        res.status(200).send({
            message: "Success"
        })
    } catch (e) {
        console.log({e})
        res.status(403).send({
            message: "Failed to update movie"
        })
    }
}

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await movieModel.deleteMovie(id);
        res.status(200).send({
            message: "Success"
        })
    } catch (e) {
        res.status(403).send({
            message: "Failed to delete movie"
        })
    }
}
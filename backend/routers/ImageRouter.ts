import {Router} from "express";
import {getImage, uploadImage} from "../controllers/ImageController";

export const imageRouter = Router();
imageRouter.get("/image/:name", getImage);
imageRouter.post("/upload", uploadImage);

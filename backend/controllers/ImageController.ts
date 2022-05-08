import {Request, Response} from "express";
import {promises} from "fs";
import * as path from "path";
const uploadFile = require("../middlewares/upload");

export const getImage = async (req: Request, res: Response) => {
    const imageName = req.params.name;
    const imagePath = path.join(__dirname, "../image_repository", imageName);
    try {
        await promises.readFile(imagePath)
        res.sendFile(imagePath);
    } catch (e) {
        res.status(400).send('Error: Image does not exists');
    }
    return;
}

export const uploadImage = async (req: Request, res: Response) => {
    try {
        await uploadFile(req, res);

        if (!req["file"]) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({
            message: "Uploaded the file successfully: " + req["file"].originalname,
        });
    } catch (err) {
        console.log(err);

        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }

        res.status(500).send({
            message: `Could not upload the file: ${req["file"].originalname}. ${err}`,
        });
    }
}
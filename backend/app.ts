import express = require("express");
import {Application, json} from "express";
import {movieRouter} from "./routers/MovieRouter";
const cors = require("cors");

const app: Application = express();
app.use(json());
app.use(cors());
app.use("/api", movieRouter);
app.listen(8080, () => {
    console.log("Backend Started")
})
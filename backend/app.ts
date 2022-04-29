import express = require("express");
import {Application, json} from "express";
import {movieRouter} from "./routers/MovieRouter";
import {auth} from "./middlewares/auth";

const cors = require("cors");

const app: Application = express();
app.use(json());
app.use(cors());
app.use("/api", auth, movieRouter);
app.listen(8081, () => {
    console.log("Backend Started")
})
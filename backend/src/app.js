import express from "express";
import dotenv from "dotenv";
import codingProblemRouter from "./Routes/codingproblem.js";
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors())
const PORT = Number(process.env.PORT);

app.get("/", (req, res) => {
    res.send("Hello Guys");
});

app.use("/codingproblem", codingProblemRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
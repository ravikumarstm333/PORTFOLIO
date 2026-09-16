import express from "express";
import dotenv from "dotenv";
import state from "./Routes/statedata.js";
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors())
const PORT = Number(process.env.PORT);

app.get("/", (req, res) => {
    res.json({
        message: "Portfolio Backend API",
        status: "running"
    });
});

app.use("/state", state);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
import express, { json } from "express";
import dotenv from "dotenv";
import stateRoute from './Routes/statedata.route.js'
import cors from 'cors'
import contactRouter from "./Routes/message.route.js";
import database from "./config/database.js";

dotenv.config();
const app = express();
app.use(json())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
const PORT = Number(process.env.PORT);

app.get("/", (req, res) => {
    res.json({
        message: "Portfolio Backend API",
        status: "running"
    });
}); 

app.use("/api/v1/stats", stateRoute);


app.use("/api/v1/contact",contactRouter);
app.use((req, res) => {
  res.status(404).json({
    error: "Invalid route"
  });
});
const start = async()=>{
    await database();
    app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
    });

}
start();

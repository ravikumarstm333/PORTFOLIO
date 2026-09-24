import express from "express";
import dotenv from "dotenv";
import stateRoute from './Routes/statedata.route.js'
import cors from 'cors'
import messageRoute from "./Routes/message.route.js";
import database from "./config/database.js";

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

app.use("/api/v1/stats", stateRoute);
app.post("/contactform",(req,res)=>{
    const data=req.body();
})
app.use("/api/v1/contact",messageRoute);
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

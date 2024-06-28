import express from "express";
import cors from "cors";
import { createChart, searchSymbol } from "./home.js";

// Initialise constants
const app = express();
const port = 5555;

// Middleware
app.use(cors());
app.use(express.json())

// Test connection
app.post("/home", searchSymbol);

app.post("/chart", createChart);


// Listen to port
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});
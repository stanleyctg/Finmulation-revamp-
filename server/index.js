import express from "express";
import cors from "cors";
import { searchSymbol } from "./buy.js";

// Initialise constants
const app = express();
const port = 5555;

// Middleware
app.use(cors());
app.use(express.json())

// Test connection
app.post("/home", searchSymbol);

// Listen to port
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});
import express from "express";
import cors from "cors";
import yahooFinance from "yahoo-finance2";

const app = express();
const port = 5555;

// Middleware
app.use(cors());
app.use(express())

// Test connection
app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!"} )
})

// Listen to port
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});
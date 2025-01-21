import express from 'express';
import "dotenv/config"
import "./src/db/dbConnnection.js"
import cors from 'cors';
import productRouter from './src/routers/productRouter.js';


const port = process.env.PORT || 5001
const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/Produc", productRouter)

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, (req, res) => {
    console.log(`Example app listening on port http://localhost:${port}`);
})
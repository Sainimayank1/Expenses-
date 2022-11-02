import express from "express";
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()
const app = express();
const port = 4000 || process.env.PORT;

const connect = await mongoose.connect(process.env.LINK)
if (connect)
    console.log("Connection suuccesful")


app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(port, () => console.log("Listining on http://localhost:", +port))
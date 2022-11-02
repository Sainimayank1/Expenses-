import express from "express";
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from "cors";

dotenv.config()
const app = express();
app.use(cors())
const port = 4000 || process.env.PORT;

const res = await mongoose.connect(process.env.LINK)
if (res)
    console.log("Connection suuccesful")


app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(port, () => console.log("Listining on http://localhost:", +port))
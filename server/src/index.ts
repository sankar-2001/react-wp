import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);


mongoose.connect("mongodb://admin:admin@127.0.0.1:27017/?retryWrites=true&w=majority")
        .catch((err) => console.log("ERR", err));



app.listen(5001, () => console.log("SERVER STARTED"));



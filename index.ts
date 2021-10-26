require("dotenv").config();
import errorMiddleware from "@middlewares/error.middleware";
import * as solanaWeb3 from "@solana/web3.js";

import express from "express";
import {api} from "./routes/api";

const app = express();

app.use(express.json());

api(app);

// Error Handler Middleware
app.use(errorMiddleware);
console.log(solanaWeb3);

export default app;

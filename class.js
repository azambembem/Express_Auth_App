import express from "express";
import { config } from "dotenv";
config();
import {
  ValidationError,
  NotFoundError,
  CustomError
} from "./error-handler.js";

const port = process.env.PORT;

const app = express();

app.get("/blogs", (req, res) => {
  res.send("Welcome application middleware!");
});

app.get("/error", (req, res, next) => {
  next(new NotFoundError());
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

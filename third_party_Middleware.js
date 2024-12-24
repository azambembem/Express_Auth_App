// 라우터 레벨 미들웨어 - > maxsus faqat bitta middleware uchun ishalaydi.

import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
config();

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Welcome Express");
});

app.get("/blogs", (req, res) => {
  res.send("Welcome Morgan!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

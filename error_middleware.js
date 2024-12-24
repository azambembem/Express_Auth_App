// error 미들웨어 - > errorlarni boshqa dasturchilga ko'rsatish uchun  something went wrong holatda beramiz!

import express from "express";
import { config } from "dotenv";
config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  throw new Error("something went wrong"); // errorni boshqa dasturchilga korsatish uchun
});

app.get("/blogs", (req, res) => {
  res.send("Welcome Error!");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

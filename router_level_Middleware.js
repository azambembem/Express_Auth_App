// 라우터 레벨 미들웨어 - > maxsus faqat bitta middleware uchun ishalaydi.

import express from "express";
import { config } from "dotenv";
config();

const app = express();

let count = 0;

const blogMiddeleware = (req, res, next) => {
  if (count < 3) {
    count++;
    return next();
  }
  res.status(400).send("Limitli request!");
};
const port = 3000;

// faqat blogMiddeleware uchun zimat korsatadi.
app.get("/blogs", blogMiddeleware, (req, res) => {
  res.send(`Blogs ${count}`);
});

let count_news = 0;
app.get("/news", (req, res) => {
  count_news++;
  res.send(`Blogs ${count_news}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 실행 결과: /blogs -> da 3 sira ishlaydi.
//           / news -> da cheksiz request yobirsa buladi.

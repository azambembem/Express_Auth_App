// 애플리케이션 레벨 미들웨어
import express from "express";
import { config } from "dotenv";
config();

const app = express();

const port = 3000;

app.use((req, res, next) => {
  console.log("midleware server");
  next(); // agar buyerda nextni ishlatmasak loading bo'lib turaveradi...
});
app.get("/hanging", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

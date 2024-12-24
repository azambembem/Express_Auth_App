// 기본 사용법
import express from "express";
import { config } from "dotenv";
config();

const port = process.env.PORT;

const app = express();

app.get("/download", (req, res) => {
  const filePath = "./files/sample.txt"; // sample.txt faylni download qilib beradi.
  res.download(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

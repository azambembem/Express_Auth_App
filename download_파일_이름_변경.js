// 파일 이름 변경
import express from "express";
import { config } from "dotenv";
config();

const port = process.env.PORT;

const app = express();

app.get("/download", (req, res) => {
  const filePath = "./files/sample.txt";
  const fileName = "newname.txt"; // eski sample.txt fayli yani name bn download buladi.
  res.download(filePath, fileName);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

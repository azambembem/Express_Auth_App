const express = require("express");
const { default: mongoose } = require("mongoose");

const { productsRouter } = require("./routes/products.router.js");

const PORT = 4000;
mongoose
  .connect(
    `mongodb+srv://hohoho:azam1020@express-cluster.9f7s8.mongodb.net/` // hohoho ni yonida passwordni berish kerak! mongo db ulash uchun
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB!");
  });
const Users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
];

const app = express(); // yangi Express app 생성
// app.use(express.json());

app.get("/users", (req, res) => {
  res.send(Users);
});
app.get("/", (req, res) => {
  // "/" 이 경로로 요청이 오면 Hello from Express!를 결과값으로 전달
  res.send("Hello from Express!");
});

app.get("/users/:usersId", (req, res) => {
  const userId = parseInt(req.params.usersId); // userni id sini oliyapti
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.use("/products", productsRouter); // /products pathini products.router.js ni o'rnatish.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // PORT 4000ni chaqrib ishlatish.
});

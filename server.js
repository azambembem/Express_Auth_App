const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretText = "superSecret";

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post content"
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post content"
  }
];

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt create  payload + secretText
  const accessToken = jwt.sign(user, secretText);
  res.json({ accessToken: accessToken });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

const port = 4000;
app.listen(port, () => {
  console.log(`running port ${port}`);
});

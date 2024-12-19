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

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"]; // token을 request headers에서 가져오기

  const token = authHeader && authHeader.split("")[1]; // Bearer oewieoirifoei.woeirewiroweio.weoiuwieowioe
  if (token == null) return res.sendStatus(401);
  // token이 있으니 유효한 토큰인지 확인
  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const port = 4000;
app.listen(port, () => {
  console.log(`running port ${port}`);
});

const express = require("express");
const { userRouter } = require("./userRouter");
const app = express();

app.use("/home", (req, res, next) => {
  console.log("common middleware 01");
  next();
});
app.use("/user", userRouter);

app.get("/home/:userId/:name", (req, res) => {
  console.log(req.params);
  res.json({
    userid: req.params.userId,
  });
});

app.post("/login", (req, res) => {
  res.end("login");
});
app.listen("3000", () => {
  console.log("port 3000 is listening");
});

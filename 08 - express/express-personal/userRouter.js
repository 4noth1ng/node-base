const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.end("用户列表");
});

module.exports = {
  userRouter,
};

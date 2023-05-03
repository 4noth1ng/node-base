const Router = require("koa-router");

const userRouter = new Router();

userRouter.get("/user", (ctx, next) => {
  ctx.response.body = "user list";
});

module.exports = userRouter;

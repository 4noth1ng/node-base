const Koa = require("koa");
const app = new Koa();
const userRouter = require("./userRouter");

app.use((ctx, next) => {
  console.log("middleware1");
  next();
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen("3000", () => {
  console.log("服务器启动成功");
});

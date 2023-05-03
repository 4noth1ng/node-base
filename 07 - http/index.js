const http = require("http");
const url = require("url");
const querystring = require("querystring");

const port = "3000";

const server = http.createServer((req, res) => {
  let obj;
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    req.setEncoding("utf-8");
    req.on("data", (data) => {
      console.log(data);
      const { username, password } = JSON.parse(data);
      obj = { username, password };
    });
    req.on("end", () => {
      res.end(JSON.stringify(obj));
    });
  } else {
    res.end("hello world");
  }
});

server.listen(port, () => {
  console.log("服务启动");
});

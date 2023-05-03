const fs = require("fs");

/**
 * 所有stream 都是 EventEmitter的实例
 */
// const read = fs.createReadStream("../04 - fs/demo.txt", {
//   start: 1,
//   end: 8,
//   encoding: "utf-8",
// });

// read.on("open", (fd) => {
//   console.log("文件被打开");
// });

// read.on("data", (data) => {
//   console.log(data);
// });

// const writer = fs.createWriteStream("../04 - fs/demo.txt", {
//   flags: "a+",
//   encoding: "utf-8",
// });

// writer.write("写入，但流不会结束", (err) => {
//   console.log("写入");
// });
// writer.on("close", () => {
//   console.log("close");
// });
// writer.end("写入并结束", (err) => {
//   console.log("写入成功");
// });

// writer.on("close", () => {
//   console.log("close");
// });

// read.on("data", (data) => {
//   console.log(data);
// });

/**
 * pipe可以将输入流(createReadStream) 传递给 输出流(createWriteStream)
 */

const reader = fs.createReadStream("../04 - fs/demo.txt");
const writer = fs.createWriteStream("./pipe.txt");
reader.pipe(writer);

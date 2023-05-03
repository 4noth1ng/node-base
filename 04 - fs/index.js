const fs = require("fs");
const path = require("path");
/**
 * statSync 同步读取 阻塞后续操作
 */
// const state = fs.statSync("./demo.txt");
// console.log(state);

// console.log("after state");

/**
 * stat 异步读取，传入回调函数
 */
// fs.stat("./demo.txt", (err, state) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(state);
// });

// console.log("before state");

/**
 * fs.promises.stas() 异步promise读取
 */

// fs.promises
//   .stat("./demo.txt")
//   .then((state) => {
//     console.log(state);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("before state");

/**
 * fs 模块中的 open 方法用于打开一个文件，并返回一个文件描述符，该描述符可以用于后续的读取或写入操作。
 */

// fs.open("./demo.txt", "r", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(fd); // 文件操作符
// });

/**
 * fs 模块中的 writeFile() 方法用于异步写入文件
 */
// fs.writeFile("./demo.txt", "hello fs", { encoding: "utf-8" }, (err) => {
//   console.log(err);
// });

/**
 * fs 模块中的 writeFile() 方法用于异步读取文件
 */

// fs.readFile("./demo.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

/**
 * fs.mkdir / fs.mkdirSync 创建文件夹
 */
// const dir = "./mkdir";
// if (!fs.existsSync(dir)) {
//   fs.mkdir(dir, (err) => {
//     throw err;
//   });
// }

/**
 * 读取文件夹内容
 */

// function readFolders(folder) {
//   fs.readdir(folder, { withFileTypes: true }, (err, files) => {
//     if (err) throw err;
//     files.forEach((file) => {
//       if (file.isDirectory()) {
//         const newFolder = path.resolve(folder, file.name);
//         readFolders(newFolder);
//       } else {
//         console.log(file.name);
//       }
//     });
//   });
// }

// readFolders("../../node常见模块");

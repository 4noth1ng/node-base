const path = require("path");

const pathName = "D:/关于前端/node常见模块/02 - path模块/index.js";

/**
 * basename
 */
// console.log(path.basename(pathName, ".js")); // index

/**
 * dirname -- dictionary name 文件目录
 */
// console.log(path.dirname(pathName)); // D:/关于前端/node常见模块/02 - path模块

/**
 * extName -- 文件扩展名 -- 类似'.' + pathName.split(".")[0]
 */
// console.log(path.extname(pathName)); // .js

/**
 * isAbsolute -- 是否为绝对路径 判断是否包含./ ../
 */

// console.log(path.isAbsolute(pathName)); // true
// console.log(path.isAbsolute("../01 - 模块规范")); // false

/**
 * parse 生成路径信息对象， format 将路径信息对象转化为路径
 */
// const pathObj = {
//   root: "D:/",
//   dir: "D:/关于前端/node常见模块/02 - path模块",   // dirname
//   base: "index.js",                              // basename
//   ext: ".js",                                    // extname
//   name: "index",                                 // basename("index.js", ".js")
// };
// path.parse(pathName); // 输出形如pathObj

/**
 * join 路径拼接
 */

// console.log(path.join("d:", "关于前端", "node常见模块", "02 - path常见模块"));  //d:\关于前端\node常见模块\02 - path常见模块

/**
 * resolve 将参数转为绝对路径 从右到左匹配，默认将当前dirname拼接， 遇到绝对路径停止拼接
 */

// console.log(path.resolve(__dirname, "index.js")); // D:\关于前端\node常见模块\02 - path模块\index.js
// console.log(path.resolve("a", "b"));  //D:\关于前端\node常见模块\02 - path模块\a\b
// console.log(path.resolve("a", "/b", "c")); // D:\b\c

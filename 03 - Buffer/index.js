const { Buffer } = require("node:buffer");

/**
 * Buffer.from(string[, encoding])
 */

// const buff = Buffer.from("你好世界");

// console.log(buff); // utf-8 每个汉字使用三个字节进行编码
// console.log(buff.toString());
// console.log(buff.toString("ascii")); // 乱码

/**
 * Buffer.from(buffer) 输出一个buffer的拷贝，不受源buffer影响
 */

// const buf1 = Buffer.from("buffer");
// const buf2 = Buffer.from(buf1);

// console.log(buf1);
// console.log(buf2);

// buf1[0] = 0x61;

// console.log(buf1);
// console.log(buf2);

/**
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 *
 * ArrayBuffer 对象表示一个固定长度的原始二进制数据缓冲区。可以通过创建一个指定大小的 ArrayBuffer 对象来分配一段内存。
 * ArrayBuffer 本身不能直接读取或写入数据，但可以使用 TypedArray 和 DataView 类型来访问其内容。
 * Buffer.from(arrayBuffer)返回一个新的buffer，但与arrayBuffer指向同一个堆内存
 */

// const arr = new Uint16Array(2);

// arr[0] = 5000;
// arr[1] = 4000;

// const buf = Buffer.from(arr.buffer);

// console.log(buf);
// // Prints: <Buffer 88 13 a0 0f>

// // 改变原来数组的数字
// arr[1] = 6000;

// console.log(buf);
// // Prints: <Buffer 88 13 70 17>

const fs = require("fs");
// js是异步的， 回调
// 异步是无法预测的
// node 是异步 无阻塞的  性能，服务器需求
// 以下的几个文件  都是同时执行的   谁先回来谁执行callback
// promise 是有需求的   能对事件的执行规定顺序
// 异步  同步  各有长处
// 异步提高了性能 失去了顺序执行的灵活性

// 异步执行   无法判断顺序   需要有回调函数
// fs.readFile('./input.txt', (err, data) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data.toString());  
// });
// fs.readFile('./input2.txt', (err, data) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data.toString());  
// });
// fs.readFile('./input3.txt', (err, data) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data.toString());  
// });


// 同步执行  可以判断顺序  不需要回调函数  这个时候I/O是被锁着的   性能降低了
const f1 = fs.readFileSync("input.txt", "utf-8");
console.log(f1);
const f2 = fs.readFileSync("input2.txt", "utf-8");
console.log(f2);
const f3 = fs.readFileSync("input3.txt", "utf-8");
console.log(f3);


// 异步转同步
// 将异步变成同步执行
// 既能将所有事件放到事件池，效率依旧高，有回调函数
// 也能提高代码的可读性，让代码能够按照顺序执行
// promise处理异步请求
const fs = require("fs");
function readFile1() {
    // 返回一个promise实例
    // resolve 是未来发生的事情
    // resolve 和 reject 定义了在未来界面更新完之后执行的事情
    // promise是一个语法糖 将异步变成了同步出现  最后还是异步执行
    return new Promise((resolve, reject) => {
        fs.readFile("input.txt", (err, data) => {
            if(err) {
                reject(err);
            }
            // 交出数据
            resolve(data);
        })
    });
}
function readFile2() {
    return new Promise((resolve, reject) => {
        fs.readFile("input2.txt", (err, data) => {
            if(err) {
                reject(err);
            }
            // 交出数据
            resolve(data);
        })
    });
}
function readFile3() {
    return new Promise((resolve, reject) => {
        fs.readFile("input3.txt", (err, data) => {
            if(err) {
                reject(err);
            }
            // 交出数据
            resolve(data);
        })
    });
}

// 回调地狱代码不可读  但是当前代码可读
// Promise 会为了某件事情停下来进行搞定
readFile1()
 .then(data => {
     console.log(data.toString());
     return readFile2();
 })
 .then(data => {
     console.log(data.toString());
     return readFile3();
 })
 .then(data => {
     console.log(data.toString());
 })
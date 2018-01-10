// 回调地狱
// 异步变同步
const fs = require("fs");
fs.readFile("input.txt", function (err, data) {
    console.log(data.toString());
    fs.readFile("input2.txt", function (err, data) {
        console.log(data.toString());
        fs.readFile("input3.txt", function (err,data) {
            console.log(data.toString());
        })
    })
})
// 回调地狱
// 由于回调函数是异步的
// 在下面的代码中每一层的回调函数都需要依赖上一层的回调执行完，所以形成了层层嵌套的关系最终形成类似上面的回调地狱
// 但代码以此种形式展现时无疑是不利于我们阅读与维护的

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
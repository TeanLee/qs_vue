var a = {}; // 被代理或被劫持
// Object.defineProperty(a, "b", {
//     value: 3445,
//     enumerable: false  // 不可以用for key in、Object.keys()等方式枚举、遍历
// });
// console.log(Object.keys(a));
// for(key in a) {
//     console.log(key + ":" +a[key]);
// }

Object.defineProperty(a, "b", {
    set: function(newValue) {
        console.log("你要赋值给我，我的新值是" + newValue);
        console.log(`以前的值是${this.value}`);
        this.value = newValue;
        console.log(`新的的值是${this.value}`);
    },
    get: function() {
        console.log("你取我的值");
        return this.value;
    }
})
a.b = 3;
console.log(a.b);
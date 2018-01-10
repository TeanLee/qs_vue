// vue 利用 defineProperty   实现对于数据的绑定
// 接管所有属性、方法的访问   能启动wathcher  对数据监听
var a = {};
// defineProperty 能精细化的操作对象的属性访问
// 三个参数   都是必填的
// 1、 目标对象（vue中是整个data）
// 2、 需要定义的属性或方法的名字
// 3、 目标属性所拥有的特性   descriptor
Object.defineProperty(a, "b", {
    value: 123,
    writable: true,
    configurable: false  // 是否可以再设置enumerable、writable等
});
a.b = 234;
console.log(a.b);
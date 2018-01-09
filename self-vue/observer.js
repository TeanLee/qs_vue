// 遍历所有的数据项，定义发布者
function Observer(data) {
    // n个{{title}}  能够push到一个数组中
    // 观察者模式： 保存发布者  和  订阅者之间的模式
    this.data = data;
    this.walk(data);
}
Observer.prototype = {
    walk (data) {
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        })
    },
    defineReactive(data, key, val) {
        // 实现一个发布者，里面有很多订阅者，保存发布订阅关系
        var dep = new Dep();
        // 对data 中的每一个key   都进行defineProperty
        // 拦截所有的数据访问及修改请求
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter() {
                if(Dep.target) {
                    // 添加订阅者
                    dep.addSub(Dep.target);
                }
                return val;
            },
            set: function setter (newVal) {
                // 没有改变
                if(newVal === val) {
                    return;
                }
                // 更新值
                val = newVal;
                // 提醒值改变了
                dep.notify();
            }
        })
    }
}

function Dep() {
    this.subs = [];
}
Dep.prototype = {
    // 负责添加
    addSub (sub) {
        this.subs.push(sub);
    },
    notify () {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
};
Dep.target = null;

function observe(value) {
    if(!value || typeof value !== "object") {
        return;
    }
    return new Observer(value);
}
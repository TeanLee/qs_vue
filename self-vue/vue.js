function Vue(options) {
    this.data = options.data || {};
    this.methods = options.methods || {};

    // Object.keys(this.data) 就是定义的两个属性名
    Object.keys(this.data).forEach(key => {
        // 数据代理
        this.proxyKeys(key);
    });
    observe(this.data);
    // 实例化后  编译之前
    // options.created.call(this);
    // 将当前对传递给 Compile  编译
    new Compile(options.el, this);
    // mounted 页面挂载完成后    发生的最佳时期
    // 声明周期函数，在 相应时刻发生的事件钩子
    options.mounted.call(this);
}

Vue.prototype = {
    // 数据代理
    proxyKeys(key) {
        var self = this;
        // console.log(key);
        // 定义属性   属性的get和set   是MVVM的本质
        // 有了数据代理，就可以不用深入对象的data中对数据进行操作，可以在对象上直接操作属性
        // defineProperty 最本质的是可以设置对象的行为（包括其属性）
        // 拦截所有的数据访问及修改请求
        Object.defineProperty(this, key, {
            enumerable: false, // 不可遍历（不重要）
            configurable: true,  // 可以配置（不重要）
            // 介入get 方法 （重点在于数据的get 和 set）
            get: function getter () {
                console.log(`您在获取${key}`);
                return self.data[key];
            },
            set: function setter (newVal) {
                console.log(`您设置了${key}`);
                self.data[key] = newVal;
            }
        })
    }
}
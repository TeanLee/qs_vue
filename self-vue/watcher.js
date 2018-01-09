function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();
}

Watcher.prototype = {
    get () {
        Dep.target = this;
        var value = this.vm.data[this.exp];
        // 释放
        Dep.target = null;
        return value;
    },
    update () {
        this.run();
    },
    // 将实例化的callback 执行一下
    run () {
        // 当前的值  任何时候都可以获取的到当前的值
        var value = this.vm.data[this.exp];
        // 之前的值
        var oldVal = this.value;
        // 两个值进行对比   不一样就进行更新
        if(value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
}
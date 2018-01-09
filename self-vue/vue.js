function Vue(options) {
    this.data = options.data || {};
    this.methods = options.methods || {};
    // 将当前对传递给 Compile
    new Compile(options.el, this);
}

Vue.prototype = {}
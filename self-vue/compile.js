// vm =>  vue的实例  
// mvvm 中最重要的 虚拟DOM对象
// 真实DOM 消耗内存   而  vm 将很多次的修改集中成为一次
function Compile(el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    // 使用临时节点fragment 来提升性能
    this.fragment = null;
    this.init();
}

Compile.prototype = {
    init () {
        // 接管模块去编译，显示的不是HTML  只是模板，从头开始处理模板
        // fragment 文档碎片  本身没有标签，可以添加到文档中的一个地方
        this.fragment = this.nodeToFragment(this.el);
        this.compileElement(this.fragment);
        this.el.appendChild(this.fragment);
    },
    nodeToFragment: function(el) {
        var fragment = document.createDocumentFragment();
        // 新拷贝一份，模板进行HTML的编译，将它替换原有el.innerHtml
        // 文档碎片不会留下任何痕迹
        // el.firstChild 是一个文档节点    也就是<div id="app">和<h2>{{title}}</h2>之间的间隙
        var child = el.firstChild;
        while(child) {
            // console.log(child);
            // 将文档节点串成一串，交给文档碎片
            console.log(child);
            fragment.appendChild(child);
            // 得到所有的节点
            child = el.firstChild;
        }
        console.log("====下面是fragment===");
        console.log(fragment);
        return fragment;
    },
    compileElement (el) {
        var childNodes = el.childNodes;
        // 和数组的循环一样，将节点打开，得到所有节点串成的数组
        [].slice.call(childNodes).forEach(node => {
            // console.log(node);
            // 要匹配各种符号（比如花括号）就要转义字符
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;



            // v-model  v-on:click  mounted 的实现
            // 两个分支：一个是元素节点，一个是文本节点
            if(this.isElementNode(node)) {
                // 去分析节点
                this.compile(node);
            } else if (this.isTextNode(node) && reg.test(text)) {
                this.compileText(node, reg.exec(text)[1]);
            }


            // 递归
            // 是子节点，并且存在子节点（文档节点没有子节点，文本可能有子节点）
            if(node.childNodes && node.childNodes.length) {
                this.compileElement(node);
            }



            // 获得页面元素中带{{}} 里面的字符串
            // if(text.length && reg.test(text)) {
                // console.log(reg.exec(text)[1]);
                // this.compileText(node, reg.exec(text)[1]);
            // }
            
        });
    },
    compileText (node, exp) {
        // var initText = this.vm.data[exp];
        var initText = this.vm[exp];
        this.updateText(node, initText);
        // 订阅者模式添加一个监听
        new Watcher(this.vm, exp, value => {
            this.updateText(node, value);
        })
    },
    updateText (node, value) {
        // console.log(node, value);
        node.textContent = typeof value === "undefined" ? "" : value;
    },
    isElementNode(node) {
        return node.nodeType == 1;
    },
    isTextNode(node) {
        return node.nodeType == 3;
    },
    compile (node) {
        // 得到所有标签的属性
        var nodeAttrs = node.attributes;
        Array.prototype.forEach.call(nodeAttrs, (attr) => {
            var attrName = attr.name;
            // 判断是否是指令，标志是以"v-"开头
            if(this.isDirective(attrName)) {
                var exp = attr.value;
                // 获得是什么指令    如果是“on”指令就执行以下的点击方法
                var dir = attrName.substring(2);
                if(this.isEventDirective(dir)) {
                    this.compileEvent(node, this.vm, exp, dir);
                } else {
                    this.compileModel(node, this.vm, exp, dir);
                }
            }
        });
    },
    isDirective (attr) {
        // 等于0表示存在
        return attr.indexOf("v-") == 0;
    },
    isEventDirective (dir) {
        return dir.indexOf("on:") === 0;
    },
    compileEvent (node, vm, exp, dir) {
        var eventType = dir.split(":")[1];
        var cb = vm.methods && vm.methods[exp];
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false);
        }
    },
    compileModel(node, vm, exp, dir) {
        var val = this.vm[exp];
        this.modelUpdater(node, val);
        new Watcher(this.vm, exp, value => {
            this.modelUpdater(node, value);
        });
        node.addEventListener("input", e => {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }
            this.vm[exp] = newValue;
            val = newValue;
        })
    },
    modelUpdater(node, value, oldVal) {
        node.value === "undefined" ? "" : value;
    }
}
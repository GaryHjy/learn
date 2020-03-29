// 1、遍历DOM树
// 2、文本节点：用{{}}格式的内容并解析
// 3、元素节点：访问节点特性，截获v-和@开头内容解析
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el); 

    if (this.$el) {
      // 执行编译 
      this.compile(this.$el)
    }

  }

  // 编译
  compile(el) {
    // 遍历el
    const childNodes = el.childNodes

    // 遍历并判断节点类型
    Array.from(childNodes).forEach(node => {
      // 判断元素节点
      if (this.isElement(node)) {
        console.log('元素节点'+ node.nodeName);
        // 编译元素节点
        this.compileElement(node)
      } else if(this.isInter(node)){
        // 文本节点处理，解析{{}}
        // console.log('文本节点', node.textContent)
        // 编译文本节点
        this.compileText(node)
      }

      // 递归遍历DOM 
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  // 判断是否为元素节点
  isElement(node) {
    return node.nodeType === 1
  }

  // 判断是否为文本节点
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  // 编译文本节点
  compileText(node) {
    const exp = RegExp.$1.trim();
    this.update(node, exp, 'text')
  }

  // 编译元素节点
  compileElement(node) {
    // 获取属性
    const nodeAttrs = node.attributes;
    // 遍历属性
    Array.from(nodeAttrs).forEach(attr => {
      const attrName = attr.name; // v-*
      const exp = attr.value; // v-* 对应的 value

      if (attrName.indexOf('v-') === 0) {
        // 指令 v-text v-model
        const dir = attrName.substring(2);
        this[dir] && this[dir](node, exp)
      }
    })
  }

  // 更新方法，通用函数
  update(node, exp, dir) {
    // 首次赋值
    let updateFn = this[dir+'Updater']
    updateFn && updateFn(node, this.$vm[exp]);

    // 创建Watcher，以便执行后续更新操作
    // 额外传递一个更新函数，更新指定DOM元素
    new Watcher(this.$vm, exp, function(val) {
      updateFn && updateFn(node, val);
    })
  }

  // 指令v-text编译
  text(node, exp) {
    this.update(node, exp, 'text')
  }

  // 更新文本节点
  textUpdater(node, value) {
    node.textContent = value
  }

}
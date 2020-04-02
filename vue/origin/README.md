### 说明

- vue源码解析

```
cjs webpack1，browserify
esm webpack2+
umd 兼容cjs和amd
runtime 只包括运行时，没有编译器
```

``` js
{
  //cjs webpack1，browserify
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```
# BFC

**MDN：块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

**作用：** 可以把BFC当做一个隔离的区间，BFC的子元素不会对外面的元素产生影响。

## 如何创建

- <html>根元素。
- float 属性值不为none。
- overflow 属性值不为visible的块元素。
- display 属性值不为none、block、inline。
- position 属性值不为relative或static。

## 解决什么问题

### margin重合
当相邻两个元素设置了margin，会存在相邻的一侧发生margin重合。
#### 示例
```html
<head>
  <style>
    .box {
      width: 180px;
      height: 180px;
      margin: 10px;
    }
    .box1 {
      background-color: lightblue;
    }

    .box2 {
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```
**效果图**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635411914000-4e206acf-cef7-4bb3-95a2-50c2ce9e605e.png#clientId=uf3cdc16c-067a-4&from=paste&height=352&id=u967612c5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=488&originWidth=1034&originalType=binary&ratio=1&size=88037&status=done&style=none&taskId=uc569aff5-ba18-4f92-8d49-1257fbc5e0b&width=746)


#### 解决方法

在box外层多加一层div，并触发bfc的规则。

```html
<style>
  .container {
    /* float: left; */
    /* display: inline-block; */
    overflow: hidden;
  }
  .box {
    width: 180px;
    height: 180px;
    margin: 10px;
  }
  .box1 {
    background-color: lightblue;
  }

  .box2 {
    background-color: lightcoral;
  }
</style>
<body>
  <div class="container">
    <div class="box box1"></div>
  </div>
  <div class="container">
    <div class="box box2"></div>
  </div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635412194104-bdac70d7-e1aa-4eae-a5de-ae1e0024e01b.png#clientId=uf3cdc16c-067a-4&from=paste&height=448&id=u095af6e9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=544&originWidth=908&originalType=binary&ratio=1&size=88230&status=done&style=none&taskId=ua1ea6ffc-e34a-4157-a864-88345040c9b&width=747)

### margin塌陷
当子元素设置了`margin-top`参数，会导致子元素的`margin-top`参数影响到父级元素的样式。

#### 示例

```html
<head>
  <style>
    .container {
      width: 200px;
      height: 200px;
      background-color: lightblue;
    }
    .box {
      width: 100px;
      height: 100px;
      margin-top: 40px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
	<div class="container">
    <div class="box"></div>
  </div>
</body>
```

**效果图**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635413691982-99f95195-425f-4f62-a1dc-8952820a7718.png#clientId=ua35b58f3-fa23-4&from=paste&height=374&id=u95261dcc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=430&originWidth=859&originalType=binary&ratio=1&size=75458&status=done&style=none&taskId=ua83247b9-52f4-4af2-9a71-7baff614876&width=747.5)

#### 解决方法

在父级元素触发bfc规则。

```html
<head>
  <style>
    .container {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      /* float: left; */
      /* display: inline-block; */
      /* position: absolute; */
      /* border-top: 1px solid #000; */
      overflow: hidden;
    }
    .box {
      width: 100px;
      height: 100px;
      margin-top: 40px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
	<div class="container">
    <div class="box"></div>
  </div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635413912909-79cbfdf6-49bc-4f37-b19d-d7f0a4a4e633.png#clientId=ua35b58f3-fa23-4&from=paste&height=386&id=ub0bdea3e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=495&originWidth=957&originalType=binary&ratio=1&size=76854&status=done&style=none&taskId=ud7bf9aea-e52e-4f37-b683-50e14b7f8fd&width=745.5)
​

### 高度坍塌
当子元素脱离文档流的并且父级元素没有设置高度的话，会导致父元素的高度不见了。

#### 示例

```html
<head>
	<style>
    .container {
      width: 300px;
      background-color: lightblue;
      border: 1px solid #000;
    }
    .box {
      width: 150px;
      height: 150px;
      background-color: lightcoral;
      float: left;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
```
**效果图**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635414595484-5a759b02-f7b7-4aa2-9f01-fa461cf69a8b.png#clientId=u92f4bcd8-041c-4&from=paste&height=344&id=u1f384942&margin=%5Bobject%20Object%5D&name=image.png&originHeight=409&originWidth=890&originalType=binary&ratio=1&size=72905&status=done&style=none&taskId=ufb7c3853-68a6-496d-be83-908558ed075&width=748)
#### 解决方法

在父级元素触发bfc规则。

```html
<head>
	<style>
    .container {
      width: 300px;
      background-color: lightblue;
      border: 1px solid #000;
      /* display: inline-block; */
      /* float: left; */
      /* position: absolute; */
      overflow: hidden;
    }
    .box {
      width: 150px;
      height: 150px;
      background-color: lightcoral;
      float: left;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/210664/1635415282158-5cd54288-f582-4688-94e7-e7a1c93d14a1.png#clientId=u92f4bcd8-041c-4&from=paste&height=398&id=ub878e407&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=965&originalType=binary&ratio=1&size=75417&status=done&style=none&taskId=u4df4a809-f9ac-4966-be4b-7892c114839&width=746.5)
​
## 参考
[MDN：块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

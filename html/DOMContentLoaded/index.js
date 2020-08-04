// https://www.jianshu.com/p/63c0495d9d7e
// 当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。—— MDN

// defer 与 DOMContentLoaded
// 如果遇到script标签包含defer，不会影响HTML解析，而是等到HTML解析完成之后，脚本执行会在DOMContentLoaded触发之前完成

// async 与 DOMContentLoaded
// 如果遇到script标签包含async，HTML文档构建不受影响，解析完成之后，DOMContentLoaded才会触发，而不需要等待async脚本执行、样式加载

// readyState:loading -> 静态script执行 -> readystatechange:interactive -> DOMContentLoaded -> readystatechange:complete -> load -> 动态script


(function () {
  // js file
  document.addEventListener("DOMContentLoaded", function (){
    console.log("DOMContentLoaded event");
  });

  document.addEventListener("readystatechange", function (){
    console.log("state change: now is: "+document.readyState);
  });

  window.addEventListener('load', function() {
    console.log("window load")
  })
})()
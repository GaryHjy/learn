# XSS

Cross Site Scripting  
跨站脚本攻击

XSS(Cross-Site Scripting)，跨站脚本攻击，因缩写与CSS重名，故叫XSS。跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的非本站点HTML标签或javascript进行的一种攻击。

分类：
- 反射型 - url参数注入
- 存储型 - 存储到数据库之后获取时注⼊入到页面

危害：
- 骗取用户个人信息
- 获取页面信息
- 获取cookie
- 拦截前端逻辑操作

场景：
- form表单提交，url解析，通过插入script标签的src属性进行信息截取
- 直接将script标签保存到数据库，页面请求数据时会执行script标签

防范手段：

- 转义字符
```js
// 将特殊的字符引号 尖括号 斜杆进行转义
// 黑名单

function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
// &lt;script src="http://xxx.com/xxx.js"&gt;&lt;/script&gt;
```

- HEAD设置  
```js
// 1 启用XSS过滤(浏览器器默认)
// 0 禁⽌XSS过滤
ctx.set('X-XSS-Protection', 0)
```

- CSP  

内容安全策略(CSP, Content Security Policy)   
附加的安全层，⽤于帮助检测和缓解某些类型的攻击，包括跨站脚本(XSS)和数据注入等攻击。这些攻击可⽤用于实现从数据库窃取到网站破坏或作为恶意软件分发版本等用途。

CSP本质上就是建⽴白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器⾃⼰实现的。我们可以通过这种⽅式来尽量减少XSS攻击。

```js
// 只允许加载本站资源
Content-Security-Policy: default-src 'self'
// 只允许加载 HTTPS 协议图片 
Content-Security-Policy: img-src https://*
// 不允许加载任何来源框架 
Content-Security-Policy: child-src 'none'
```

- HttpOnly Cookie  

预防XSS攻击窃取用户cookie最有效的防御⼿段。Web应用程序在设置cookie时，将其属性设为HttpOnly，就可以避免该⽹页的cookie被客户端恶意JavaScript窃取，保护用户cookie信息。

```js
response.addHeader("Set-Cookie", "uid=112; Path=/; HttpOnly")
```


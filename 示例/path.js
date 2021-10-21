const path = require('path');

// 正常字符串形式 resolve会拼接__dirname当前目录的绝对路径
// const resolvePath = path.resolve('a', 'b', 'c')
// const joinPath = path.join('a', 'b', 'c');

// 如果存在..字符串 返回上一级
// const resolvePath = path.resolve('a', '..', 'b', 'c')
// const joinPath = path.join('a', '..', 'b', 'c');

// 如果存在/字符串的话
const resolvePath = path.resolve('a', '/', 'b', 'c')
const joinPath = path.join('a', '/', 'b', 'c');

// path.resolve('a', 'b', 'c', {}); // The "path" argument must be of type string. Received an instance of Object
// path.join('a', 'b', 'c', {}); // The "path" argument must be of type string. Received an instance of Object

console.log(resolvePath);
console.log(joinPath);

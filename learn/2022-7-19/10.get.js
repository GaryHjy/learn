// 按照如下案例,写出get函数的具体实现逻辑:


function get(pathStr, obj) {
  const paths = pathStr.split('.');
  return paths.reduce((result, key) => {
    if(Array.isArray(result)) {
      return result
    }
    const value = result[key];
    if(value === Object.prototype) {
      return undefined;
    }
    return value;
  }, obj)
}

const val1 = get('a.b.c',{a:{b:{c:1}}}) // output: 1
const val2 = get('a.b.c',{a:{b:{}}}) // output: undefined
const val3 = get('a.b.__proto__',{a:{b:{}}}) // output: undefined
const val4 = get('a.b.c',{a:{b:{c:0}}}) // output: 0
const val5 = get('a.b',{a:{b:null}}) // output: null
const val6 = get('a.b.c',{a:{b:[1,2,3]}}) //output: [1,2,3]

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
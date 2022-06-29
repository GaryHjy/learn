// 按照如下案例,写出get函数的具体实现逻辑:
// get('a.b.c',{a:{b:{c:1}}}) // output: 1
// get('a.b.c',{a:{b:{}}}) // output: undefined
// get('a.b.__proto__',{a:{b:{}}}) // output: undefined
// get('a.b.c',{a:{b:{c:0}}}) // output: 0
// get('a.b',{a:{b:null}}) // output: null
// get('a.b.c',{a:{b:[1,2,3]}}) //output: [1,2,3]

function get(pathStr, obj) {
  const paths = pathStr.split('.');
  return paths.reduce((current, key) => {
    if(Array.isArray(current)) {
      return current
    }
    if(JSON.stringify(current) === '{}') {
      return undefined
    }
    const val = current[key]
    // 如果undefined null number类型 直接返回
    if ([undefined, null].includes(val) || typeof val === 'number') {
      return val
    }
    return val
  }, obj)
}

// const val = get('a.b.c',{a:{b:{c:1}}}) // output: 1
// const val = get('a.b.c',{a:{b:{}}}) // output: undefined
// const val = get('a.b.__proto__',{a:{b:{}}}) // output: undefined
// const val = get('a.b.c',{a:{b:{c:0}}}) // output: 0
// const val = get('a.b',{a:{b:null}}) // output: null
const val = get('a.b.c',{a:{b:[1,2,3]}}) //output: [1,2,3]

console.log(val);
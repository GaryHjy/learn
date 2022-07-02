// 按照如下案例,写出get函数的具体实现逻辑:


function get(pathStr, obj) {
}

// const val = get('a.b.c',{a:{b:{c:1}}}) // output: 1
// const val = get('a.b.c',{a:{b:{}}}) // output: undefined
// const val = get('a.b.__proto__',{a:{b:{}}}) // output: undefined
// const val = get('a.b.c',{a:{b:{c:0}}}) // output: 0
// const val = get('a.b',{a:{b:null}}) // output: null
const val = get('a.b.c',{a:{b:[1,2,3]}}) //output: [1,2,3]

console.log(val);
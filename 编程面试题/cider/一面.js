const tree= [
  {
    id: "1",
    children: [
      {
        id: "2",
        children: [
          {
            id: "3",
            children: [{ id: "4" }]
          },
          { id: "5" },
          {
            id: "6",
            children: [{ id: "7" }]
          },
        ]
      },
      {
        id: "8",
        children: [{ id: "9" }]
      }
    ]
  }
]

/**
 * 
 * @param {*} tree 树型结构
 * @param {*} key 目标key值
 * @returns 对应的map类型映射关系
 */
function toMap(tree, key) {
  return tree.reduce((result, item) => {
    result[item[key]] = item
    if(Array.isArray(item.children)) {
      result = {
        ...result,
        ...toMap(item.children, key)
      }
    }
    return result
  }, {})
}

/**
 * 
 * @param {*} tree 树形
 * @param {*} key 指定key值
 * @returns 返回数组集合
 */
function getListByKey(tree, key) {
  return tree.reduce((result, item) => {
    result.push(item[key])
    if(Array.isArray(item.children)) {
      result = result.concat(getListByKey(item.children, key))
    }
    return result
  }, [])
}

/**
 * 
 * @param {*} tree 树形
 * @param {*} value 指定value
 * @param {*} key 指定key值
 * @returns 
 */
function fn(tree, value, key) {
  const map = toMap(tree, key)
  const item = map[value];
  if(!item.children) {
    return '当前节点下无子节点'
  }
  return getListByKey(item.children, key)
}

// 示例：
const result1 = fn(tree, '1', 'id') // [2，3，4，5，6，7，8，9]
// 示例：
const result2 = fn(tree, '2', 'id') // [3，4，5，6，7]
// 示例：
const result3 = fn(tree, '8', 'id') // [9]
// 示例：
const result4 = fn(tree, '7', 'id') // '当前节点下无子节点'

console.log(result1, result2, result3, result4);

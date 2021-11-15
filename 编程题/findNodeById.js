const jsonTree = [{
  id: 1,
  name: '节点1',
  children: [{
      id: 2,
      name: '节点2',
      children: null
    },
    {
      id: 3,
      name: '节点3',
      children: []
    },
  ]
},
{
  id: 4,
  name: '节点4',
  children: [{
      id: 5,
      name: '节点5'
    },
    {
      id: 6,
      name: '节点6',
      children: [{
        id: 7,
        name: '节点7'
      }, ]
    },
  ]
}
]

function flatArray(treeData) {
return treeData.reduce((result, current) => {
  result.push(current)
  if (Array.isArray(current.children)) {
    result = result.concat(flatArray(current.children))
  }
  return result
}, [])
}

// [].flat


function getKey(treeData, id) {
const list = flatArray(treeData)
return list.find(el => el.id === id)
}

const data = getKey(jsonTree, 7)
console.log(data);

const deepGet = (obj, prop) => {
  // TODO: 在此处完善代码
  const paths = prop.split('.');
  const value = paths.reduce((result, key) => {
    if(key.includes('[')) {
      const [curKey, index] = key.replace(']', '').split('[');
      if(Array.isArray(result[curKey])) {
        return result[curKey][index] || {}
      }
    }
    return result[key] || {}
  }, obj)
  return Object.keys(value).length ? value : undefined;
}

/** 以下为测试代码 */
deepGet({
  school: {
    student: { name: 'Tomy' },
  },
}, 'school.student.name') // => 'Tomy'

deepGet({
  school: {
    students: [
      { name: 'Tomy' },
      { name: 'Lucy' },
    ],
  }
}, 'school.students[1].name') // => 'Lucy'

// // 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined
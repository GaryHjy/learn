exports.a = 'a1'
console.log('a.js', require('./b').b)
exports.a = 'a2'

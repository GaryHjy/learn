exports.b = 'b1'
console.log('b.js', require('./a').a)
exports.b = 'b2'
function isPalindrome(x) {
  if(x < 0) return false
  x = x.toString();
  const str = x.split('').reverse().join('');
  return x === str;
}

function isPalindrome(x) {
  if(x < 0) return false;
  x = x.toString();
  for(let i = 0; i < Math.floor(x.length / 2); i++) {
    if(x[i] !== x[x.length - 1 - i] ) {
      return false
    }
  }
  return true
}

const result = isPalindrome(12321);

console.log(result);
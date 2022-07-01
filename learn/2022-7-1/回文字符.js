// function isPalindrome(str) {
//   if(str < 0) return false
//   str = str.toString();
//   const x = str.split('').reverse().join('');
//   return x === str;
// }

function isPalindrome(x) {
  if(x < 0) return false;
  const str = x.toString();
  for(let i = 0; i < Math.floor(str.length / 2); i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

const result = isPalindrome(12321);

console.log(result);
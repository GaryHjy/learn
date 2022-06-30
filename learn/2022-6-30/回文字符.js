// function isPalindrome(x) {
//   if(x < 0) return false;
//   const str = x.toString();
//   for(let i = 0; i < Math.floor(str.length) / 2; i++) {
//     if(str[i] !== str[str.length - 1 - i]) {
//       return false
//     }
//     return true;
//   }
// };

function isPalindrome(x) {
  if(x < 0) return false;
  x = x.toString();
  const str = x.split('').reverse().join('');
  return x === str;
};

const result = isPalindrome(12321)

console.log(result);
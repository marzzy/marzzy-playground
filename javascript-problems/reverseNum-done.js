// Run Environment:        Node
// Name:                   reverse-integer
// Problem Source:         leetcode
// Problem Difficalty:     mid
// Source Link:            https://leetcode.com/problems/reverse-integer/

// Runtime: 100 ms, faster than 50.86% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.7 MB, less than 11.88% of JavaScript online submissions for Reverse Integer.
// var reverse = function(x) {
//   let baghimande, result = [];

//   if (x < 0) {
//     result.push('-');
//     maghsoom = -x;
//   } else {
//     maghsoom = x;
//   }

//   while (maghsoom >= 10) {
//     baghimande = maghsoom % 10;
//     maghsoom = (maghsoom - baghimande) / 10;
//     result.push(baghimande);
//   }

//   result.push(maghsoom);

//   result = +result.join('');
//   if ( -(2 ** 31) >= result || result >= (2 ** 31) -1) {
//     return 0;
//   }
//   return result;
// };

// Runtime: 96 ms, faster than 67.50% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.1 MB, less than 11.88% of JavaScript online submissions for Reverse Integer.
// var reverse = function(x) {
//   const signOperation = x < 0 ? -1 : 1;
//   const res = +String(Math.abs(x)).split('').reverse().join('');
//   return res > 2147483648 ? 0 : res * signOperation;
// }

// Runtime: 92 ms, faster than 81.54% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.4 MB, less than 11.88% of JavaScript online submissions for Reverse Integer.
var reverse = function(x) {
  const res = +String(Math.abs(x)).split('').reverse().join('');

  if ( res > 2147483648 ) {
      return 0;
  }
  if ( x < 0 ) {
      return -res;
  }
  return res;
}

console.log('reverse(123)',reverse(123)); //321
console.log('reverse(-123)',reverse(-123)); //-321
console.log('reverse(120)',reverse(120)); //21
console.log('reverse(0)',reverse(0)); //0
console.log('reverse(10)',reverse(10)); //1
console.log('reverse(1534236469)',reverse(1534236469)); //0
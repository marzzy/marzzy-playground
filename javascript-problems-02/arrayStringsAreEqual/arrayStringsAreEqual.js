// Runtime: 72 ms, faster than 94.19% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 39 MB, less than 22.98% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// function arrayStringsAreEqual(w1, w2) {
//   return w1.join('') === w2.join('');
// };

// Runtime: 72 ms, faster than 94.19% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 39 MB, less than 14.07% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
function arrayStringsAreEqual(w1, w2) {
  return marzzyJoin02(w1) === marzzyJoin02(w2);
};

function marzzyJoin(array) {
  let result = '';

  for(let i =0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
// Runtime: 72 ms, faster than 94.19% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 38.7 MB, less than 50.93% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
function marzzyJoin02(array) {
  return array.reduce((word, item) => word+item, '');
}

console.log('(true): ', arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log('(false): ', arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.log('(true): ', arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
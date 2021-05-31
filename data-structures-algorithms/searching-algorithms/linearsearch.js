// used for unordered arrays
// this algorithm are using in built-in func line includes, find, findIndex, and indexOf

function linearSearch(arr, target) {
  // loop over array
  for(item of arr) {
    // check if the item is eqals to targer ? true
    if (item === target) {
      return true;
    }
  }
  // if didnt ind any item that equals to target ? false
  return false;
}

console.log('true: ', linearSearch(['apple', 'orange', 'benana'], 'benana'));
console.log('true: ', linearSearch(['apple', 'orange', 'benana'], 'apple'));
console.log('true: ', linearSearch(['apple', 'orange', 'benana'], 'orange'));
console.log('false: ', linearSearch(['apple', 'orange', 'benana'], 'kiwi'));
console.log('false: ', linearSearch([], 'kiwi'));
// 1th step merging 2 sorted array to get an merged sorted array
function merge(arrA, arrB) {
  // pointerA = 0, pointerB = 0, result = []
  let pointerA = 0;
  let pointerB = 0;
  let result = [];
  // while(PA < arrA.length && PB < ArrB.length)
  while(pointerA <= arrA.length && pointerB <= arrB.length && (arrA[pointerA] || arrB[pointerB])) {
    // if (arrA[PA] < ArrB[PB]) 
      // result.push(arrA[PA]) & PA++
    // else 
      // result.push(arrB[PB]) & PB++
    // if PB === arrB.length then result.push(rest of arrA)
    // else result.push(rest of arrB)
    // return result
    if(arrA[pointerA] < arrB[pointerB] || pointerB === arrB.length) {
      result.push(arrA[pointerA]);
      pointerA++;
    } else {
      result.push(arrB[pointerB]);
      pointerB++;
    }
  }
  return result;
}

console.log('[]', merge([], []));
console.log('[1,2,3,4,5]', merge([1,2,3], [4,5]));
console.log('[1,2,3,4,5]', merge([1,2,3, 4, 5], []));
console.log('[1,2,3,4,5]', merge([],[1,2,3, 4, 5]));
console.log('[1,2,3,4,5]', merge([1,2],[3, 4, 5]));
console.log('[1,2,3,4,5]', merge([1,3, 5], [2,4]));
console.log('[1,2,3,4,5]', merge([2,4], [1,3, 5]));
console.log('[1,2,3,4,5]', merge([5], [1,2,3, 4]));
console.log('[1,2,3,4,5]', merge([4,5], [1,2,3]));
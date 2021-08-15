// 1th step merging 2 sorted array to get an merged sorted array
function merge(arrA, arrB) {
  // pointerA = 0, pointerB = 0, result = []
  let pointerA = 0;
  let pointerB = 0;
  let result = [];
  // while(PA < arrA.length && PB < ArrB.length)
  while(
    pointerA <= arrA.length && 
    pointerB <= arrB.length && 
    (arrA[pointerA] !== undefined || arrB[pointerB] !== undefined)
  ) {
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

function mergeSort(arr) {
  // break up the arr to halves till theier length was 1
  // merge them up
  if(arr.length <= 1 ) return arr;
  
  const midPoint = Math.ceil(arr.length/2);

  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
}

console.log(mergeSort([0,0,0]));
console.log(mergeSort([1,2,3, 4]));
console.log(mergeSort([3,2,1]));
console.log(mergeSort([25,0,-1,10,2]));
console.log(mergeSort([25,0,7,10,2]));
console.log(mergeSort([0,2,3,4,5,70,10]));
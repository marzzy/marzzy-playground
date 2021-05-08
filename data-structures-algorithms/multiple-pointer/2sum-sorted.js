function twoSumSorted(arr) {
  if (arr.length < 2) {
    return undefined;
  }
  let rightPointer = arr.length -1;
  let leftPointer = 0;

  // while right > left
    // sum = arr[right] + arr[left]
      // if sum > 0
        // right -1
      // if sum < 0
        // left+1
      // else
        // return arr[right], arr[left]
  while(rightPointer > leftPointer) {
    const sum = arr[rightPointer] + arr[leftPointer];

    if (sum > 0) {
      rightPointer--;
    } else if (sum < 0) {
      leftPointer++;
    }
    else {
      return [arr[leftPointer], arr[rightPointer]]
    }
  }
}

console.log('[-1,1]',twoSumSorted([-5,-3,-1,0,1,7]));
console.log('[-1,1]',twoSumSorted([-1,1]));
console.log('undefiend',twoSumSorted([-5,-3,0,1,7]));
console.log('undefiend',twoSumSorted([]));
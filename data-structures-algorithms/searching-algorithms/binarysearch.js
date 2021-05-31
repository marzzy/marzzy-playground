// its work on ordered Array
function binarySearch(sortedArr, target) {
  // start-end-middle pointer
  let startPointer = 0;
  let endPointer = sortedArr.length-1;
  let middlePointer = Math.ceil(sortedArr.length / 2);

  // while start > middle
  while (startPointer+1 < endPointer) {
    // if sortedArr[middle] = target ===> return true 
    // if sortedArr[middle] > target  ===> end = middle & make a new middle
    // if sortedArr[middle] < target ====> start = middle & make a new middle
    if (sortedArr[middlePointer] === target || sortedArr[startPointer] === target || sortedArr[endPointer] === target) {
      return true;
    } else if (sortedArr[middlePointer] > target) {
      endPointer = middlePointer;
    } else {
      startPointer = middlePointer;
    }
    middlePointer = startPointer + Math.floor((endPointer - startPointer + 1) /2);
  }
  return false;
}

console.log('true: ', binarySearch([1,2,3,4,43,53,100,399], 399))
console.log('true: ', binarySearch([1,2,3,4,43,53,100,399], 53))
console.log('true: ', binarySearch([1,2,3,4,43,53,100,399], 1))
console.log('false: ', binarySearch([1,2,3,4,43,53,100,399], 70))
console.log('false: ', binarySearch([1,2,3,4,43,53,100,399], 34))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 1))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 2))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 100))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 53))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 4))
console.log('true: ', binarySearch([1,2,3,4,43,53,100], 43))
console.log('false: ', binarySearch([1,2,3,4,43,53,100], 700))
console.log('false: ', binarySearch([1,2,3,4,43,53,100], -1))
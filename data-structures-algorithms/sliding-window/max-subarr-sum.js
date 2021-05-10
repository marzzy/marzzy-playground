function maxSubArrSum(arr, num) {
  // 1. return false if num > arr.lenght
  if (arr.length < num) {
    return false;
  }

  // 2. sum the first num items in the arr
  let max = arr[0];
  for(let i = 1; i < num; i++) {
    max += arr[i];
  }

  // 3. loopover the num+1 to the end of arr
  arr.reduce((lastSum, item, index) => {
    if (index >= num) {
      // 3.a. minus first item & add the new item from the end
      lastSum = lastSum + item - arr[index-num]
      // 3.b. if the new value is bigger than max > update the max else continue
      max = lastSum > max ? lastSum : max;
      return lastSum;
    }
    return max;
  }, max);

  // 4. return max
  return max;
}

console.log('5: ',maxSubArrSum([1,2,3], 2));
console.log('10: ',maxSubArrSum([1,2,5,2,8,1,5], 2));
console.log('17: ',maxSubArrSum([1,2,5,2,8,1,5], 4));
console.log('6: ',maxSubArrSum([4,2,1,6], 1));
console.log('13: ',maxSubArrSum([4,2,1,6,2], 4));
console.log('false: ',maxSubArrSum([4,2,1], 4));
console.log('false: ',maxSubArrSum([], 1));

// num: 3
// max: 9
// lastSum: 9
// index: 3 
//  --___++
// [1,2,5,2,8,1,5]
// .0,1,2,3,4,5,6.
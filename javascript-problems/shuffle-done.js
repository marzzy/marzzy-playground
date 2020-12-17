// Run Environment:        Node
// Name:                   shuffle
// Problem Source:         Leetcode
// Problem Difficalty:     easy
// Source Link:            -


// Runtime: 88 ms, faster than 67.78% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.8 MB, less than 15.33% of JavaScript online submissions for Shuffle the Array.
function shuffle(nums, n) {
    //for items in nums
      // push item and arr[n] result arra
      // n++
      // continue to n === nums.length + 1
  let res = [];
  let i = 0;

  while(n < nums.length) {
    res.push(nums[i],nums[n]);
    n++;
    i++;
  }

  return res;
};

console.log('([2,3,5,4,1,7]):', shuffle([2,5,1,3,4,7], 3));
console.log('([1,4,2,3,3,2,4,1]):', shuffle([1,2,3,4,4,3,2,1], 4));
console.log('([1,2,1,2]):', shuffle([1,1,2,2], 2));
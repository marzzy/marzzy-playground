// Run Environment:        Node
// Name:                   runningSum
// Problem Source:         leetcode
// Problem Difficalty:     easy
// Source Link:            https://leetcode.com/problems/running-sum-of-1d-array/submissions/

// Runtime: 80 ms, faster than 70.23 % of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 38.8 MB, less than 64.70 % of JavaScript online submissions for Running Sum of 1d Array.
function runningSum (nums) {
  let result = [];

  nums.reduce((accumolator, item) => {
    accumolator += item;
    result.push(accumolator);
    return accumolator;
  }, 0)

  return result;
};

console.log(' it will return ([1,3,6,10]): ', runningSum([1, 2, 3, 4]) )
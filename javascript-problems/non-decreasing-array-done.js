
// Run Environment:        Node
// Name:                   checkPossibility
// Problem Source:         leetcode
// Problem Difficalty:     mid
// Source Link:            https://leetcode.com/problems/non-decreasing-array/

function checkPossibility(nums) {
  // for num in nums
  // in num[i] && num[i+1] && num[i+2] find min & max
  //if (min != num[i] || max != num[i + 2])
  // if !reachtolimmit 
  // if min = num[i+2] 
  //remove min && set reachtolimmit to true
  // if max = num[i]
  //remove max & set reachtolimmit to true
  //else 
  //return false
  // return true
  let reachToLimit = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i === nums.length - 2) {
      if (nums[i] > nums[i + 1]) {
        return !reachToLimit;
      }
    } else {
      const min = Math.min(nums[i], nums[i + 1], nums[i + 2]);
      const max = Math.max(nums[i], nums[i + 1], nums[i + 2]);

      if (min != nums[i] || max != nums[i + 2]) {
        if (!reachToLimit) {
          reachToLimit = true;
          if (min === nums[i + 2]) {
            nums.splice(i + 2, 1);
          } else if (max === nums[i]) {
            nums.splice(i, 1);
          } else {
            nums.splice(i + 1, 1);
          }
          i--;
          continue;
        }
        return false;
      }
    }
  }
  return true;
}


console.log('(true): ', checkPossibility([4,2,3,4,5,6]));
console.log('(false): ', checkPossibility([4,2,1]));
console.log('(false): ', checkPossibility([3,4,2,3]));
console.log('(true): ', checkPossibility([5,7,1,8]));
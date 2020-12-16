//LINKS: https://leetcode.com/problems/non-decreasing-array/
function checkPossibility(nums) {
    //for item in nums
      // if item > nums[i+1]
        // check the item and sort it in right place
        // for item-new in new arr
          // if item-new > nums[i+1] 
          //return false

    //return true

    let reachToLimit = false;

    for(let i =0; i< nums.length; i++) {
      if(nums[i] > nums[i+1]) {
        if (!reachToLimit) {
          reachToLimit = true;
          let indexOfChangingItem = i;
          for(let j = i+1; j<nums.length; j++) {
            if (nums[indexOfChangingItem] > nums[j]) {
              nums.splice(i, 2, nums[j], nums[indexOfChangingItem]);
              indexOfChangingItem++;
              j++;
            }
          }
        }
        return false
      }
    }
    return true;
};


console.log('(true): ', checkPossibility([4,2,3,4,5,6]));
console.log('(false): ', checkPossibility([4,2,1]));
console.log('(false): ', checkPossibility([3,4,2,3]));
console.log('(true): ', checkPossibility([5,7,1,8]));
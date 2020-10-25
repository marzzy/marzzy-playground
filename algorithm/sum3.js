// https://leetcode.com/problems/3sum/

function threeSum(nums) {
  let unusedNums = new Set();
  let finalResponse = [];

  for(let i = 0; i< nums.length; i++) {
    unusedNums.add(nums[i]);
    // if(!usedNums.has(nums[i])) {
    //   let twoSumTarget = 0 - nums[i];
    //   let addSet = new Set();

    //   for(let j = 0; j< nums.length; j++) {
    //     let addTarget = twoSumTarget - nums[j];

    //     if (!addSet.has(addTarget)) {
    //       finalResponse.push([addTarget, nums[i], nums[j]]);
    //       usedNums.add(nums[j]);
    //       usedNums.add(nums[i]);
    //       usedNums.add(addTarget);
    //     }
    //   }
    // }
  }

  for(let i = 0; i< nums.length; i++) {
    if(unusedNums.has(nums[i])) {
      let sumTarget = -nums[i];
      let addSet = new Set();
      
      if (addSet.has(sumTarget - nums[i])) {
        finalResponse.push([sumTarget - nums[i], nums[i], addSet.get(sumTarget - nums[i])]);
      }
      // if (!addSet.has(addTarget)) {
      //   finalResponse.push([addTarget, nums[i], hashMap.get(nums[i])]);
      //   usedNums.add(nums[j]);
      //   usedNums.add(nums[i]);
      //   usedNums.add(addTarget);
      // }
      // for(let j = 0; j< nums.length; j++) {

      // }
    }
  }

  return finalResponse;
}

console.log('output: [[-1,-1,2],[-1,0,1]] => ',threeSum([-1,0,1,2,-1,-4]))
console.log('output: [] => ',threeSum([]))
console.log('output: [] => ',threeSum([0]))

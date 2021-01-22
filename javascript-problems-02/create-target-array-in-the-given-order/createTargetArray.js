function createTargetArray(nums, index) {
  let finalArray = [];
  for (let i in index) {
    finalArray.splice(index[i], 0, nums[i]);
  }
  return finalArray;
};

console.log('([0,4,1,3,2]): ', createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
console.log('([0,1,2,3,4]): ', createTargetArray([1,2,3,4,0], [0,1,2,3,0]));
console.log('([1]): ', createTargetArray([1], [0]));
console.log('([2,2,4,4,3]): ', createTargetArray([4,2,4,3,2], [0,0,1,3,1]));
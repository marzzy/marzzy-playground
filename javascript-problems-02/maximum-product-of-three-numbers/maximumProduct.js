function maximumProduct(nums) {
  nums.sort((a,b)=> a < b ? 1 : -1);
  const positive = nums[0]*nums[1]*nums[2];
  const positiveAndNegative = nums[0]*nums[nums.length -2]*nums[nums.length -1];

  return Math.max(positive, positiveAndNegative);
};

console.log('(6): ', maximumProduct([1,2,3]));
console.log('(24): ', maximumProduct([1,2,3,4]));
console.log('(-6): ', maximumProduct([-1,-2,-3]));
console.log('(39200): ', maximumProduct([-100,-98,-1,2,3,4]));
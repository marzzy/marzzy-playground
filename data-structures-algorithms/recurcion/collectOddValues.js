function collectOddValues(nums) {
  let oddnums = [];
  let result = [];

  function setOddNum(nums) {
    if (nums.length > 0) {
      const num = nums[nums.length -1];
      if (num%2) oddnums.push(num);
      nums.pop();
      setOddNum(nums);
    }
    return;
  }
  function reorderArr(arr) {
    if (arr.length > 0) {
      const item = arr[arr.length -1];
      result.push(item);
      arr.pop();
      reorderArr(arr);
    }
    return result;
  }
  setOddNum(nums);

  return reorderArr(oddnums);
}

console.log('[] : ', collectOddValues([]))
console.log('[] : ', collectOddValues([2,4,6,8]))
console.log('[1,3,5,7] : ', collectOddValues([1,3,5,7]))
console.log('[1,3,5,7] : ', collectOddValues([1,2,3,4,5,6,7]))
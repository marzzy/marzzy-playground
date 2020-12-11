function twoSum (nums, target) {
  let hashtable = new Map();
  let res = [];

  nums.forEach((num, index) => {
    const newHashMapKey = target - num;

    if (index > 0) {
      if (hashtable.has(newHashMapKey)) {
        res = [hashtable.get[newHashMapKey], index];
      }
    }
    hashtable.set([newHashMapKey, index])
  })
  return res;
};

console.log('a:([1,2]) ', twoSum([2, 7, 11, 15], 9));
console.log('b:([1,3]) ', twoSum([2, 3, 4], 6));
console.log('b:([1,2]) ', twoSum([-1, 0], -1));

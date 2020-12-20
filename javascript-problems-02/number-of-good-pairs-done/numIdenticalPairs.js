var numIdenticalPairs = function(nums) {
  let obj = {};
  let counter = 0;

  for (val of nums) {
    if (obj[val]) {
      counter += obj[val];
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  }
  return counter;
};


console.log('(6): ', numIdenticalPairs([1,1,1,1]));
console.log('(0): ', numIdenticalPairs([1,2,3]));
console.log('(4): ', numIdenticalPairs([1,2,3,1,1,3]));
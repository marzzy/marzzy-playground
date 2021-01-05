function countSmaller(nums) {
  let sortedUniqueNums = {}, result=[], passedIndex = new Set();
  let minimum = nums.reduce((min, num) => (num < min) ? num : min, nums[0]);

  if (minimum < 0) {
    nums = nums.map(item => item += Math.abs(minimum));
  }
  nums.forEach((num, index) => {
    if (sortedUniqueNums[num]) {
      sortedUniqueNums[num].push(index);
      return 0;
    }
    sortedUniqueNums[+num] = [index];
  })

  result.length = nums.length;
  result.fill(0);
  Object.values(sortedUniqueNums).forEach(numIndexes => {
    numIndexes.forEach(numIndex => {
      passedIndex.add(numIndex);
      result = result.map((count, index) => {
        if (index < numIndex && !passedIndex.has(index)) { 
          return count + 1;
        }
        return count;
      })
    })
  })
  return result;
};


//find min value between the nums
// if it was x and <0
  // add x to all of the item so no mines item left between nums

//sortedUiqe data structure 
// const sortedUiqe = {
//   1: [0, 3, 5], // [+1(ghable index `0`), +2(ghable index `3`), +1(ghable index `5`)]
//   2: [2], // +1(ghable index `2`) 
//   5: [1],
//   6: [4]
// }

//make an arr(result) each item shuld have a value and a flag that set its fixes or not
//initials all of the item with [0,false]
//for each item in `sortedUiqe data structure` => (key, [value])
  // for each value
    // result[value][1] = true;
    // for i before value (in result)
      // if result[i][0] = false 
        // result[i][1]++
//make an array of result[i][0] and return it

// [0(`f`), 0, 0, 0, 0, 0]
// [0(f), 0+1, 0+1, 0(`f`), 0, 0]
// [0(f), 1+1, 1+1, 0(f), 0+1, 0(`f`)]
// [0(f), 2+1, 2(`f`), 0(f), 1, 0(f)]
// [0(f), 3(`f`), 2(f), 0(f), 1, 0(f)]
// [0(f), 3(f), 2(f), 0(f), 1(`f`), 0(f)]

console.log('([0,3,2,0,1,0]): ', countSmaller([1,5,2,1,6,1]));
console.log('([1,0]): ', countSmaller([-1, -2]));
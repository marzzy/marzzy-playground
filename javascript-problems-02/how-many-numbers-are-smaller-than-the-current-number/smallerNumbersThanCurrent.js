// Runtime: 92 ms, faster than 83.50 % of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 41.9 MB, less than 16.08 % of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
function smallerNumbersThanCurrent(nums) {
  //hashmap > [uniqSortedItem(from min to max), array of its indexes]
  //smallerCounter = 0
  //baraye har uniqSortedItem 
    //be ezaye har indexi
      //result[index] = smallerCounter
    //smallerCounter += index.lenght

  let uniqSortedItemsMap = {} ,smallerCounter = 0, result = [];

  nums.forEach((num, numIndex) => {
    uniqSortedItemsMap[num] = uniqSortedItemsMap[num]
      ? [...uniqSortedItemsMap[num], numIndex]
      : [numIndex]
  });

  Object.values(uniqSortedItemsMap).forEach(indexArray => {
    indexArray.forEach(numIndex => result[numIndex] = smallerCounter);
    smallerCounter += indexArray.length;
  });

  return result;
};

console.log('([4,0,1,1,3]): ', smallerNumbersThanCurrent([8,1,2,2,3]));
console.log('([2,1,0,3]): ', smallerNumbersThanCurrent([6,5,4,8]));
console.log('([0,0,0,0]): ', smallerNumbersThanCurrent([7,7,7,7]));
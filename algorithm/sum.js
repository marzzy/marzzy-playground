// Brute Force
// Runtime: 236 ms, faster than 10.24% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.8 MB, less than 14.41% of JavaScript online submissions for Two Sum.

// var twoSum = function(nums, target) {
//   for(let i = 0 ; i < nums.length -1; i++) {
//       let requiredNum = target - nums[i];
//       for(let j = i+1; j <= nums.length; j++ ) {
//           if (nums[j] === requiredNum ) {
//               return [i,j]                
//           }
//       }
//   }
// };

// Two-pass Hash Table
// Runtime: 84 ms, faster than 66.86% of JavaScript online submissions for Two Sum.
// Memory Usage: 40.5 MB, less than 14.41% of JavaScript online submissions for Two Sum.
// var twoSum = function(nums, target) {
//   let hashTable = new Map();

//   for(let i=0;i<nums.length;i++) {
//     hashTable.set(nums[i], i);
//   }
//   for(let i =0; i<nums.length; i++) {
//     if(hashTable.has(target-nums[i])) {
//       if (i !== hashTable.get(target-nums[i])) {
//         return [i, hashTable.get(target-nums[i])]
//       }
//     }
//   }
// }

// One-pass Hash Table
// Runtime: 76 ms, faster than 88.47% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.4 MB, less than 14.41% of JavaScript online submissions for Two Sum.
var twoSum = function(nums, target) {
  let hashTable = new Map();

  for(let i = 0; i<nums.length; i++) {

    if (i > 0) {
      let expectedNum = target-nums[i];

      if(hashTable.has(expectedNum)) {
        return [i, hashTable.get(expectedNum)];
      }
    }
    
    hashTable.set(nums[i], i);
  }
}

let a =[1,3,4,2];
let b = [3,3];

console.log('a: ',twoSum(a,6));
console.log('b: ',twoSum(b,6));
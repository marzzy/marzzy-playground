// first solution
// function decompressRLElist(nums) {
//   let result = [];
//   let counter = 0;
//   do {
//     for(let i = 0; i< nums[counter]; i++) {
//       result.push(nums[counter+1]);
//     }
//     counter += 2;
//   } while( counter < nums.length )

//   return result;
// };

// secound solution
function decompressRLElist(nums) {
  let result = [];
  let counter = 0;
  do {
    const frequency = nums[counter];
    const value = nums[counter+1];

    result.push(...new Array(frequency).fill(value));
    counter += 2;
  } while( counter < nums.length )

  return result;
};

console.log('([2,4,4,4]): ', decompressRLElist([1,2,3,4]));
console.log('([1,3,3]): ', decompressRLElist([1,1,2,3]));
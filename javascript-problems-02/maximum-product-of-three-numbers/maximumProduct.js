// first solution
// O(nlogn)
// function maximumProduct(nums) {
//   nums.sort((a,b)=> a < b ? 1 : -1);
//   const positive = nums[0]*nums[1]*nums[2];
//   const positiveAndNegative = nums[0]*nums[nums.length -2]*nums[nums.length -1];

//   return Math.max(positive, positiveAndNegative);
// };

// 2nd solution
// O(n)
function maximumProduct(nums) {
  let min1, min2;
  let max1, max2, max3;

  nums.forEach(num => {
    if(num <= min1 || min1 === undefined) {
      [ min1 , min2 ] = [num , min1];
    } else if (num < min2 || min2 === undefined) {
      min2 = num;
    }

    if(num >= max1 || max1 === undefined) {
      [ max1, max2, max3 ] = [ num, max1, max2 ];
    } else if ( num >= max2 || max2 === undefined ) {
      [ max1, max2, max3 ] = [ max1 ,num, max2 ];
    } else if ( num > max3 || max3 === undefined) {
      max3 = num;
    }
  })

  return Math.max(max1*max2*max3, min1*min2*max1);
};

console.log('(6): ', maximumProduct([1,2,3]));
console.log('(24): ', maximumProduct([1,2,3,4]));
console.log('(-6): ', maximumProduct([-1,-2,-3]));
console.log('(39200): ', maximumProduct([-100,-98,-1,2,3,4]));
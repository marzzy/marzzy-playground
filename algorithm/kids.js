// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Runtime: 80 ms, faster than 68.62 % of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 38.8 MB, less than 48.10 % of JavaScript online submissions for Kids With the Greatest Number of Candies.
function kidsWithCandies (candies, extraCandies) {
  // find max in candies
  // for each item in candies
    // add extraCandies to item 
    // result >= max ? true : false
  //or
    // if item >= max -3

  return candies.map(item => item >= (Math.max(...candies) - extraCandies));
};

console.log('([true,true,true,false,true]): ', kidsWithCandies([2, 3, 5, 1, 3], 3));
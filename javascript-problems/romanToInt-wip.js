// Run Environment:        Node
// Name:                   romanToInt
// Problem Source:         leetcode
// Problem Difficalty:     mid
// Source Link:            https://leetcode.com/problems/roman-to-integer/

//Runtime: 228 ms, faster than 20.50% of JavaScript online submissions for Roman to Integer.
//Memory Usage: 46.4 MB, less than 5.36% of JavaScript online submissions for Roman to Integer.
const RomansCharVal = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

var romanToInt = function(s) {
  let arr = [...s], result = 0;

  while(arr.length >= 2) {
    let [firstChar, secoundChar] = arr;

    if(RomansCharVal[secoundChar] > RomansCharVal[firstChar]) {
      result += RomansCharVal[secoundChar] - RomansCharVal[firstChar];
      arr.shift();
      arr.shift();
    } else {
      result += RomansCharVal[firstChar];
      arr.shift();
    }
  }

  if(arr.length === 1) {
    return result + RomansCharVal[arr[0]];
  }

  return result;
};

console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("IX")); //9
console.log(romanToInt("III")); //3
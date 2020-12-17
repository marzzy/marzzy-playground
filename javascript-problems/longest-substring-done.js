// Run Environment:        Node
// Name:                   lengthOfLongestSubstring
// Problem Source:         leetcode
// Problem Difficalty:     mid
// Source Link:            https://leetcode.com/problems/longest-substring-without-repeating-characters


// Runtime: 272 ms, faster than 27.78% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 45.5 MB, less than 5.77% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// function lengthOfLongestSubstring (s) {
//   let longestSubLength = 0, startPoint = 0;
//   let subStr = new Map();

//   for (let i = startPoint; i < s.length ; i++) {
//     if (subStr.has(s[i])) {
//       longestSubLength = 
//         subStr.size > longestSubLength ? subStr.size : longestSubLength;
//       startPoint = subStr.get(s[i])+1;
//       subStr.clear();
//       for (let j = startPoint; j <= i; j ++) {
//         subStr.set(s[j], j);
//       }
//     }
//     subStr.set(s[i], i);
//   }
//   return subStr.size > longestSubLength ? subStr.size : longestSubLength;
// };

// Runtime: 96 ms, faster than 95.72% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 43.4 MB, less than 5.77% of JavaScript online submissions for Longest Substring Without Repeating Characters.
function lengthOfLongestSubstring (s) {
  let longestSubLength = 0, startPoint = 0, oldStartPoint = 0;
  let subStr = new Map();
  
  for (let i = startPoint; i < s.length ; i++) {
    if (subStr.has(s[i])) {
      longestSubLength = 
        subStr.size > longestSubLength ? subStr.size : longestSubLength;
      oldStartPoint = startPoint;
      startPoint = subStr.get(s[i])+1;
      for (let j = oldStartPoint; j < startPoint; j++) {
        subStr.delete(s[j]);
      }
    }
    subStr.set(s[i], i);
  }
  return subStr.size > longestSubLength ? subStr.size : longestSubLength;
};

console.log('abcabcbb (3): ', lengthOfLongestSubstring("abcabcbb"));
console.log('bbbbb (1): ', lengthOfLongestSubstring("bbbbb"));
console.log('pwwkew (3): ', lengthOfLongestSubstring("pwwkew"));
console.log(' (0): ', lengthOfLongestSubstring(""));
console.log('aab (2): ', lengthOfLongestSubstring("aab"));
console.log('dvdf (3): ', lengthOfLongestSubstring("dvdf"));
console.log('fdvd (3): ', lengthOfLongestSubstring("fdvd"));
console.log('anviaj (5): ', lengthOfLongestSubstring("anviaj"));

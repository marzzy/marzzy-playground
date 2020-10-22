// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring (s) {
  let longestSubLength = 0, startPoint = 0;
  let subStr = new Map();

  for (let i = startPoint; i < s.length ; i++) {
    if (subStr.has(s[i])) {
      longestSubLength = 
        subStr.size > longestSubLength ? subStr.size : longestSubLength;
      startPoint = subStr.get(s[i])+1;
      subStr.clear();
      for (let j = startPoint; j <= i; j ++) {
        subStr.set(s[j], j);
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

// Run Environment:        Node
// Name:                   longestCommonPrefix
// Problem Source:         leetcode
// Problem Difficalty:     mid
// Source Link:            -

function longestCommonPrefix(strs) {
  if(strs.length === 0) {
    return ''
  } else if (strs.length === 1) {
    return strs[1]
  } else {
    let prefix = findsSmallestWordOrPrefix(strs);
    
    if (prefix.length === 0) {
      return ''
    } else {
      var newArr = makeNewUniqSlicedArr();
      
      if (newArr.length === 1) {
        return newArr[0];
      } else {
        prefix = findPrefix(newArr);
        return prefix;
      }
    }
  }
};

function findsSmallestWordOrPrefix(arr) {
  arr.reduce((accumulator, item) => {
      if(item.length < accumulator.length) {
        accumulator = item;
      }
    },'');
}

console.log('should be (fl)',longestCommonPrefix(["flower","flow","flight"]));
console.log('should be ()',longestCommonPrefix(["dog","racecar","car"]));
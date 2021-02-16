function countConsistentStrings(allowed, words) {
  //let counter = 0
  //const hashTable = new Set([...allowed])
  //for item in words
    // for each char in item
      // if char is not a key of allowed hash table
        // go to next word
      // go to next char
      // if this is the last char
        // counter++

};

console.log('(2): ', countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
console.log('(7): ', countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
console.log('(4): ', countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])); 
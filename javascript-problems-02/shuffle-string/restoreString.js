function restoreString(s, indices) {
  // arr = [...s], result = [];
  // for each item in indices(item, index)
    // result[item] = arr[index]
  // return result.join('')

  const stringArr = [...s];
  let result = [];

  indices.forEach((indice, index) => result[indice] = stringArr[index]);
  
  return result.join('');
};

console.log('("leetcode): ', restoreString("codeleet", [4,5,6,7,0,2,1,3]));
console.log('("abc"): ', restoreString("abc", [0,1,2]));
console.log('("nihao"): ', restoreString("aiohn", [3,1,4,2,0]));
console.log('("arigatou"): ', restoreString("aaiougrt", [4,0,2,6,7,3,1,5]));
console.log('("rat"): ', restoreString("art", [1,0,2]));
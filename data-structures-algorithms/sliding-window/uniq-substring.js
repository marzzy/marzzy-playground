function uniqSubstring(str) { 
  // 1. if the str isempty return ''
  if (!str) return '';

  // 2. set an empty obj and (i)startpointer=0 & (j)dynamicpointer=0, maxI-J=[0,0]
  let tmp={};
  let startPointer = 0;
  let startDynamicMax = [0,0];

  // 3. loop over str chars while j < array.length
  for(let dynamicPointer=0 ;dynamicPointer<str.length ; dynamicPointer++) {
    // 3.a. if char is not in the obj keys || char is in the obj keys but its value is less than i
      // obj[char] = char index
    const char = str[dynamicPointer];
    if (!(char in tmp) || tmp[char] < startPointer) {
      tmp[char] = dynamicPointer;
    } else {
      // 3.b. else 
        // check if the difference of i&j are bigger than maxI-J to update maxI-J
        // i = object[char] +1 
      if (startDynamicMax[1]-startDynamicMax[0] < dynamicPointer-1-startPointer) {
        startDynamicMax = [startPointer, dynamicPointer-1];
      }
      startPointer = tmp[char] + 1
    }
    // 3.c. j++
    ++dynamicPointer;
  }
  return str.slice(...startDynamicMax);
  // 4. return the string on maxI-J
}

console.log('abc:             ', uniqSubstring('abccaad'));
console.log('bcdefgahijk:     ', uniqSubstring('abcdefgahijk'));
console.log('a:               ', uniqSubstring('aaaaaaaa'))
console.log(':                ', uniqSubstring(''))


// maxI&J: [i,j] > should be update when i wants to change
// tempres: {a: 0,b: 9,c: 7, d:3, e: 4,f:5,g:6, h:8,}
// loopindex: 7
//                     j
//        i
// 'a b c d e f g c h  b  j   k'
// .0,1,2,3,4,5,6,7,8, 9, 10, 11.
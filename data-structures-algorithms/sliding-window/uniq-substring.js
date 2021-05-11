function uniqSubstring(str) { 
  // 1. if the str isempty return ''
  if (!str) return '';

  // 2. set an empty obj and (i)startpointer=0 & (j)dynamicpointer=0, maxI-J=[0,0]
  let tmp={};
  let startPointer = 0;
  let startDynamicMax = [0,0];
  const stringLength = str.length;

  // 3. loop over str chars while j < array.length
  for(let dynamicPointer=0 ;dynamicPointer<stringLength ; dynamicPointer++) {
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
      startPointer = tmp[char] + 1;
      tmp[char] = dynamicPointer;
    }

    // 4. check if it is the last char is it needed to update startDynamicMax or not
    if (dynamicPointer === stringLength-1 && (startDynamicMax[1]-startDynamicMax[0] < dynamicPointer-startPointer)) {
        startDynamicMax = [startPointer, stringLength];
    }
  }

  // 5. return the string on maxI-J
  return str.slice(startDynamicMax[0], startDynamicMax[1]+1);
}

console.log('abc:             ', uniqSubstring('abccaad'));
console.log('bcdefgahijk:     ', uniqSubstring('abcdefgahijk'));
console.log('a:               ', uniqSubstring('aaaaaaaa'))
console.log(':                ', uniqSubstring(''))


// maxI&J: [0,2]
// tempres: {a: 5,b: 1,c: 3, d: 6}
//              j
//            i
// 'a b c c a a d'
// .0,1,2,3,4,5,6,7,8, 9, 10, 11.
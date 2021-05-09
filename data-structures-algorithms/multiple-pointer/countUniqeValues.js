// NOTICE: the values mast be sorted
// 1th way
// function countUniqeValues(arr) {
//   // if the arr.length < 2 ===> return arr.length
//   if (arr.length < 2) return arr.length;
//   // let startpointer=0, dynamicpointer=1, counter=0
//   let startpointer = 0;
//   let dynamicpointer = 1;
//   let counter = 1;

//   // while startpointer < arr.lenght -1
//   while( startpointer < arr.length -1) {
//     // if arr.startpointer === arr.dynamicpointer
//     if (arr[startpointer] === arr[dynamicpointer]) {
//       if (dynamicpointer === arr.length - 1) {
//         return counter;
//       }
//       dynamicpointer++;
//     }
//     // else 
//     else {
//       if (dynamicpointer === arr.length - 1) {
//         return counter+1;
//       }
//       counter++;
//       startpointer = dynamicpointer;
//       dynamicpointer++;
//     }
//   }
// }

// 2nd way
function countUniqeValues(arr) {
  // if arr.length < 2 return arr.length
  if (arr.length < 2) return arr.length;

  // let startpointer=0, dynamicpointer=1
  let startpointer = 0;
  let dynamicpointer = 1;

  // loop over arr by dynamicpointer 
  while(dynamicpointer < arr.length) {
    // if arr[startpointer] !== arr[dynamicpointer]
      // arr[startpointer] = arr[dynamicpointer]
      if (arr[startpointer] !== arr[dynamicpointer]) {
        arr[startpointer] = arr[dynamicpointer];
        ++startpointer;
      }
      ++dynamicpointer;
  }

  // return startpointer+1
  return startpointer+1;
}

console.log('0: ', countUniqeValues([]));
console.log('1: ', countUniqeValues([1]));
console.log('1: ', countUniqeValues([1,1]));
console.log('2: ', countUniqeValues([1,2]));
console.log('2: ', countUniqeValues([1,1,1,1,1,7]));
console.log('7: ', countUniqeValues([1,2,3,4,5,6,7]));
console.log('3: ', countUniqeValues([1,2,3,3,3]));
console.log('3: ', countUniqeValues([1,2,2,2,3]));
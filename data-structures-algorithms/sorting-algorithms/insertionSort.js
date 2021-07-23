// function insertionSort(arr) {
//   // loop over arr from 2 item(i)
//   for(let outerCounter = 1; outerCounter<arr.length; outerCounter++) {
//     // loop over arr from the i-1 till 0 (j)
//     let indexofCandidate = false;
//     for(let innerCounter = outerCounter-1; innerCounter > -1; innerCounter--) {
//       // let indexOdCandidate = false;
//       // if arr[j] < arr[i]
//       if(arr[innerCounter] > arr[outerCounter]) {
//         // indexofCandidate = j
//         indexofCandidate = innerCounter;
//       }
//     }
//     // if(typeof indexOdCandidate !== 'boolean')
//     if(typeof indexofCandidate !== 'boolean') {
//       // const candidateVal = delete arr[j];
//       // NOTICE: delete make an empty spot which lead some difficulty
//       // arr.splice(i,0,candidateVal)
//       const candidateVal = arr[outerCounter];
//       arr.splice(outerCounter, 1);
//       arr.splice(indexofCandidate, 0, candidateVal);
//     }
//   }
//   return arr;
// }

function insertionSort(arr) {
  for(let outerCounter = 1; outerCounter<arr.length; outerCounter++) {
    const item = arr[outerCounter];
    for(let innerCounter = outerCounter-1; innerCounter > -2; innerCounter--) {
      if(arr[innerCounter] !== undefined && arr[innerCounter] > item) {
        arr[innerCounter+1] = arr[innerCounter];
      } else {
        arr[innerCounter+1] = item;
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([0,0,0]));
console.log(insertionSort([1,2,3]));
console.log(insertionSort([6,5,4]));
console.log(insertionSort([25,0,-1,10,2]));
console.log(insertionSort([25,0,7,10,2]));
console.log(insertionSort([0,2,3,4,5,70,10]));
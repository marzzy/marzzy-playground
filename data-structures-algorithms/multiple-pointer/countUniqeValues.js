// NOTICE: the values mast be sorted
function countUniqeValues(arr) {
  // if the arr.length < 2 ===> return arr.length
  // let startpointer=0, dynamicpointer=1, counter=0
  // while startpointer < arr.lenght -1
    // if arr.startpointer === arr.dynamicpointer
      // dynamicpoiner++
    // else if dynamicpointer < arr.length -1
      // counter++ && startpointer++ && dynamicpointer++
    // else
      // return counter++
  // return counter;
}

console.log('0: ', countUniqeValues([]));
console.log('1: ', countUniqeValues([1]));
console.log('2: ', countUniqeValues([1,1,1,1,1,7]));
console.log('7: ', countUniqeValues([1,2,3,4,5,6,7]));
console.log('3: ', countUniqeValues([1,2,3,3,3]));
console.log('3: ', countUniqeValues([1,2,2,2,3]));
function swap(arr, ind1,ind2){
  return [arr[ind2], arr[ind1]] = [arr[ind1], arr[ind2]];
}

function selectionSort(arr) {
  // loop from 0 to arr.length -1 (i)
  for(let outerCounter =0; outerCounter < arr.length -1; outerCounter++) {
    // [minIndex, minVal] = [i, arr[i]]
    let [minIndex = outerCounter, minVal = arr[outerCounter]] = [];
    // loop from i+1 to the end of the arr
    for(let innerCounter=outerCounter+1; innerCounter < arr.length; innerCounter++) {
      // find if there is item that is smaller than minVal and update it
      if(arr[innerCounter] <minVal) {
        minIndex = innerCounter;
        minVal = arr[innerCounter];
      }
    }
    // swap minVal with i
    if(outerCounter !== minIndex) {
      swap(arr, outerCounter, minIndex);
    }
  }
  return arr;
}

console.log(selectionSort([0,0,0]));
console.log(selectionSort([1,2,3]));
console.log(selectionSort([3,2,1]));
console.log(selectionSort([25,0,-1,10,2]));
console.log(selectionSort([25,0,7,10,2]));
console.log(selectionSort([0,2,3,4,5,70,10]));
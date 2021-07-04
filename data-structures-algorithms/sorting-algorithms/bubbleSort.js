function swap(arr, ind1,ind2){
  return [arr[ind2], arr[ind1]] = [arr[ind1], arr[ind2]];
}

function bubbleSort(arr) {
  for(let pointer = 0; pointer <arr.length; pointer++){
    let isNotSorted = false;
    for(let innerPointer = 0; innerPointer <arr.length -1; innerPointer++) {
      if(arr[innerPointer] > arr[innerPointer+1]) {
        swap(arr, innerPointer, innerPointer+1);
        isNotSorted=true;
      }
    }
    if(!isNotSorted) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([0,0,0]));
console.log(bubbleSort([1,2,3]));
console.log(bubbleSort([3,2,1]));
console.log(bubbleSort([25,0,-1,10,2]));
console.log(bubbleSort([25,0,7,10,2]));
console.log(bubbleSort([0,2,3,4,5,70,10]));
function swap(arr, i,j) {
  [arr[i],arr[j]] = [arr[j],arr[i]];
}

// notice: it will change the array IN-PLACE 
// notice: it will RETURN the final index of pivot  
function pivotHelper(arr, start=0,end= arr.length-1){
  // counter = 0
  let counter = start;
  const pivot = arr[start];
  // go through the arr
  for(let i = start+1; i< end+1 ; i++) {
    const item = arr[i];
    //if item is less than pivot
    if(item < pivot) {
      // counter++
      // chenge item to the counter position
      counter++;
      if(i !== counter) {
        swap(arr, i, counter);
      }
    }
  }
  // swap pivot with counter item position
  swap(arr, start, counter);
  // return counter
  return counter;
}

// let originalArr = [5,2,1,8,4,7,6,3];
// console.log('return 4 with arr of pivot of "5"', pivotHelper(originalArr), originalArr);

function quickSort(arr, left=0, right=arr.length) {
  if(left < right) {
      const currentPivotIndex = pivotHelper(arr, left, right);

      quickSort(arr, currentPivotIndex+1, right);
      quickSort(arr, left,currentPivotIndex-1);
  }
  return arr;
}

console.log(quickSort([]));
console.log(quickSort([3]));
console.log(quickSort([2,1]));
console.log(quickSort([0,0,0]));
console.log(quickSort([1,2,3,4]));
console.log(quickSort([3,2,1,3,5]));
console.log(quickSort([25,0,-1,10,2]));
console.log(quickSort([25,0,7,10,2]));
console.log(quickSort([0,2,3,4,5,70,10]));
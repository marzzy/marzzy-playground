function swap(arr, i,j) {
  [arr[i],arr[j]] = [arr[j],arr[i]];
}

// notice: it will change the array IN-PLACE 
// notice: it will return the final index of pivot  
function pivotHelper(arr, start=0,end= arr.length-1){
  // counter = 0
  let counter = start;
  const pivot = arr[start];
  // go through the arr
  for(let i = 1; i< end+1 ; i++) {
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

let originalArr = [5,2,1,8,4,7,6,3];
console.log('return 4 with arr of pivot of "5"', pivotHelper(originalArr), originalArr);
function radixHelper(arr, counter) {
  let resultArr;
  let done;
  const helper = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };

  arr.forEach(item => {
    const stringItem = String(item);
    const nthDigit = stringItem[stringItem.length -1 -counter] || 0;
    helper[nthDigit].push(item);
  })

  if(helper[0].length === arr.length) {
    resultArr = helper[0];
    done = true;
  } else {
    resultArr = Array.from(Object.values(helper)).reduce((result, smallerArr) => {
      return result.concat(smallerArr);
    },[]);
    done = false;
  }

  return { done, arr: resultArr };
}

//notice : we work on upper than 0 numbers
function radixSort(arr) {
  let counter = 0;
  let helperRes = {};
  do {
    helperRes = radixHelper(helperRes.arr || arr, counter);
    counter++;
  } while(helperRes.done);

  return helperRes.arr;
}

// console.log(radixSort([0,0,0]));
// console.log(radixSort([1,2,3]));
// console.log(radixSort([3,2,1]));
// console.log(radixSort([25,0,10,2]));
// console.log(radixSort([25,0,7,10,2]));
// console.log(radixSort([0,2,3,4,5,70,10]));
console.log(radixSort([100,127,1143,9824,185,70,10,3,0]));
// Run Environment:        Node
// Name:                   Make Counter Array
// Target & Description:
//      The `getArray` method get 2 number as input
//        and return an array between this two

function *generateNumbersInRow(start) {
  try {
    let counter = start;
    yield counter;

    while(true) {
      counter++;
      yield counter;
    }
  }
  finally {
    console.log('thats done');
  }
}

function getArray(start, end) {
  let myArr = [];

  for (var i of generateNumbersInRow(start)) {
    myArr.push(i);

    if (i >= end) {
      break;
    }
  }
  return myArr;
}

console.log(getArray(3,8));
console.log(getArray(-3,5));

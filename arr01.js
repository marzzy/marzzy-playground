'use strict';

function sumInput() {
  let arr = [];
  let a = 0;
  let res = 0;

  do {
    arr.push(+a);
    a = prompt('plz enter int', 0);
  }
  while (!isNaN(a))
  
  for(let item of arr){
    res += item;
  }

  console.log('arr',arr)
  return res;
}

alert(sumInput());
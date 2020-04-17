"use strict";

// var a = 42;
// var b = "foo";
// var c = false;

// var d = ((a && b) || c) 
//   ? (c || b
//       ? a
//       : c && b)
//   : a;

// console.log(d);



// function foo(a) {
//   return (
//     a * 2
//     + 3
//     / 12);
// }

// console.log(foo(1));

// var b = 3;

// function foo(a = 42, b = a + 2) {
//   console.log(a, b);
// }

// foo(null);


function foo() {
  try {
    console.log('hiiii');
    return 4
  }
  finally {
    console.log("Hello");
    return 454
  }
  
  console.log("never runs");
}
console.log(foo());
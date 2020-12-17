"use strict";

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
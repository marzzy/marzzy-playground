"use strict";

function foo(a) {
  return (
    a * 2
    + 3
    / 12);
}

console.log(foo(1));

var b = 3;

function bar(a = 42, b = a + 2) {
  console.log(a, b);
}

bar(null);
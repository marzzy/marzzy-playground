'use strict';
// let isEmpty = function (obj) {
//   let a = 0;
//   for (let key in obj) {
//     a++;
//   };
//   return !a;
// }

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};

console.log('111', isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log('2222',isEmpty(schedule)); // false

schedule["9"] = "ready";

console.log('33333',isEmpty(schedule)); // false


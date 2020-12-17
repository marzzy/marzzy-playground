// Run Environment:        Node
// Name:                   Check object emptiness

'use strict';

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};

console.log('(true)', isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log('(false)',isEmpty(schedule)); // false

schedule["9"] = "ready";

console.log('(false)',isEmpty(schedule)); // false


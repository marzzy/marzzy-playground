// Run Environment:        Node
// Name:                   Truncate string

'use strict';

function truncate(str, limitNum) {
  if (str.length > limitNum)
    return str.slice(0, limitNum - 1) + '...'
  else
    return str
}

console.log("What I'd like to te…", truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
console.log("Hi everyone!", truncate("Hi everyone!", 20)); // "Hi everyone!"
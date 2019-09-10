'use strict';

function ucFirst(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function truncate(str,limitNum){
  if (str.length > limitNum)
    return str.slice(0,limitNum-1)+ '...'
  else 
    return str
}

console.log(ucFirst("john"));

console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
console.log(truncate("Hi everyone!", 20)); // "Hi everyone!"
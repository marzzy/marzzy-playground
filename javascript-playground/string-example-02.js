// Run Environment:        Node
// Name:                   Camelcase word

'use strict';

function ucFirst(word) {
  return word[0].toUpperCase() + word.slice(1)
}

console.log('(John): ', ucFirst("john")); // John

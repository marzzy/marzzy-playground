'use strict';

let arr = ["NaP", "teachers", "cheaters", "PAN", "ear", "are", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map();

  arr.forEach(arrayItem => {
    let unicStrFromItem = [...arrayItem.toLowerCase()].sort().join('');

    map.set(
      unicStrFromItem, arrayItem
    );
  });
  
  return Array.from(map.values());
}
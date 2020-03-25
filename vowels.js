// main example : 
// function vowels(str) {
//   var matches;

//   // pull out all the vowels
//   if (str && (matches = str.match(/[aeiou]/g))) {
//     return matches;
//   }
// }

// my solution:
// much smaller but maybe hard to read :D
function vowels(str) {
  // if str exist return str.match... and if there isnt any vowel or any str,return sth else 
  return str && str.match(/[aeiou]/g) || 'nist chizi inja :D';
}

console.log(
  vowels("Hello World"),
  vowels("hiiii"),
  vowels("aiooo"),
  vowels("hhhh"),
  vowels(),
);

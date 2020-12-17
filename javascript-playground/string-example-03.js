// Run Environment:        Node
// Name:                   Vowels Counter


function vowels(str) {
  // if str exist return str.match... and if there isnt any vowel or any str,return sth else 
  return str && str.match(/[aeiou]/g) || 'There is no vowels';
}

console.log(
  vowels("Hello World"),
  vowels("hiiii"),
  vowels("aiooo"),
  vowels("hhhh"),
  vowels(),
);

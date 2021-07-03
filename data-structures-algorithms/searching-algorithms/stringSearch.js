// O(n^2)
function countExactSubstring(str, target){
  let counter = 0;
  for(let strPointer = 0; strPointer< str.length; strPointer++) {
    for(let targetPointer = 0; targetPointer <= target.length; targetPointer++) {
      if(targetPointer === target.length) {
        counter++;
      }
      if (str[strPointer+targetPointer] !== target[targetPointer]) {
        break;
      }
    }
  }
  return counter;
}

console.log('3:', countExactSubstring('salam bar to salam va 100 salam', 'salam'))
console.log('0:', countExactSubstring('salam bar to salam va 100 salam', 'salami'))
console.log('0:', countExactSubstring('salam bar to salam va 100 salam', 'alale'))
console.log('0:', countExactSubstring('salam bar to salam va 100 salam', 'doost'))
console.log('3:', countExactSubstring('salam bar to salam va 100 salam', 'alam'))
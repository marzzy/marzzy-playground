// https://leetcode.com/problems/palindrome-number/

function removeLastNumber(originalNum) {
  return (originalNum - (originalNum % 10)) / 10;
}
function isPalindrome(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let reversedNum = 0, notReversedNum = x;

  while(reversedNum < notReversedNum) {
    const baghimandeBarDah = notReversedNum % 10;

    reversedNum = reversedNum * 10 + baghimandeBarDah;
    notReversedNum = removeLastNumber(notReversedNum);
  }

  return reversedNum === notReversedNum || removeLastNumber(reversedNum) === notReversedNum;
}

console.log('true', isPalindrome(121)) // true
console.log('true', isPalindrome(1221)) // true
console.log('true', isPalindrome(1)) // true
console.log('true', isPalindrome(0)) // true
console.log('false', isPalindrome(-121)) //false
console.log('false', isPalindrome(10)) //false
console.log('false', isPalindrome(1212)) //false
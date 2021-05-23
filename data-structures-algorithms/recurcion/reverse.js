function reverse(str) {
  // let result= [];
  let result = [];

  // rec func > push last char
  function pushLastChar(charArr) {
    if(charArr.length > 0) {
      result.push(charArr.pop());
      pushLastChar(charArr);
    }
    return null;
  }
  pushLastChar(str.split(''));

  // retrun result.join('');
  return result.join('');
}

console.log('cba: ', reverse('abc'))
console.log('aaa: ', reverse('aaa'))
console.log('amme: ', reverse('emma'))
console.log('cdexswzaq: ', reverse('qazwsxedc'))
console.log(': ', reverse(''))
console.log('a: ', reverse('a'))
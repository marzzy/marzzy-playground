// Run Environment:        Node
// Name:                   digPow
// Problem Source:         codewar

function digPow(n, p){
  let newN = n;
  let arrayNum = [];
  while (newN > 10) {
    const baghimande = newN % 10;
    arrayNum.push(baghimande);
    newN = (newN - baghimande) / 10;
  }
  arrayNum.push(newN);
  const powedNum = arrayNum.reduce(function(accumulator, item, index, array) {
    return  accumulator + ( item ** (array.length - index + p -1 ));
  }, 0);
  return powedNum % n === 0 ? powedNum / n : -1;
}



console.log('(1) : ', digPow(89, 1)); //should return 1 since 8¹ + 9² = 89 = 89 * 1
console.log('(-1) : ', digPow(92, 1)); //should return -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log('(2) : ', digPow(695, 2)); //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log('(51) :', digPow(46288, 3)); //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
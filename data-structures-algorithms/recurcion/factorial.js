function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num-1);
}

console.log('1 : ',factorial(0))
console.log('1 : ',factorial(1))
console.log('2 : ',factorial(2))
console.log('6 : ',factorial(3))
console.log('24 : ',factorial(4))
console.log('120 : ',factorial(5))
console.log('3628800 : ',factorial(10))
function subtractProductAndSum(num) {
  const numArr = String(num).split('').map(item => +item);
  const sum = numArr.reduce((sumCalc, item) => item+sumCalc ,0);
  const multiple = numArr.reduce((multipleCalc, item) => item*multipleCalc, 1);

  return multiple - sum;
};

console.log('(15): ', subtractProductAndSum(234));
console.log('(21): ', subtractProductAndSum(4421));
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let salaries02 = {}

function SumSalaries(sal) {
  let sum = 0;
  for(let key in sal) {
    sum += sal[key];
  }
  return sum;
}

console.log('SumSalaries(salaries) ===> ', SumSalaries(salaries));
console.log('SumSalaries(salaries02) ===> ', SumSalaries(salaries02));
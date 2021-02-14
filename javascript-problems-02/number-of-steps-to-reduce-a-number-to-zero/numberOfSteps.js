function numberOfSteps(num, counter = 0) {
  //if (num <= 0)
    // return counter
  //if (num mod 2) // it is odd
    //numberOfSteps(num-1, counter+1)
  //else
    //numberOfSteps(num/2, counter+1)

  if (num <= 0) {
    return counter;
  }
  return numberOfSteps(num % 2 ? num-1 : num/2, counter+1);
};

function numberOfSteps(num, counter = 0) {
  //bit shifting

  if (num <= 0) {
    return counter;
  }
  return numberOfSteps(num % 2 ? num-1 : num >> 1, counter+1);
};

console.log('(6): ', numberOfSteps(14));
console.log('(4): ', numberOfSteps(8));
console.log('(12): ', numberOfSteps(123));
function balancedStringSplit(str) {
  //let rcounter = 0; lcounter = 0; splitedStringCounter = 0;
  // for item in str
    // if item === l ? lcounter++ : rcounter++;
    // if lcounter === rcounter
      //splitedStringCounter++
      // lcounter = rcounter = 0
  // return splitedStringCounter

  // let rCounter = 0;
  // let lCounter = 0;
  let isBalanced = 0;
  let splitedStringCounter = 0;

  [...str].forEach(character => {
    character === 'L' ? isBalanced++ : isBalanced--;
    if (!isBalanced) {
      splitedStringCounter++;
      isBalanced = 0;
    }
  })

  return splitedStringCounter;
};

console.log('(4): ', balancedStringSplit("RLRRLLRLRL"));
console.log('(3): ', balancedStringSplit("RLLLLRRRLR"));
console.log('(1): ', balancedStringSplit("LLLLRRRR"));
console.log('(2): ', balancedStringSplit("RLRRRLLRLL"));
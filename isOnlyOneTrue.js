function isOnlyOneTrue(){
  let sum = 0;
  console.log('tedad e item ha : ',Array.from(arguments).length);
  Array.from(arguments).forEach((item) => sum += !!item);
  console.log('sum is : ',sum);
  return !!(sum === 1)
}

let results = [
  isOnlyOneTrue(true,false,'hi', '', 0),
  isOnlyOneTrue('hi'),
  isOnlyOneTrue(true),
  isOnlyOneTrue(true,false),
  isOnlyOneTrue(true,false,true),
  isOnlyOneTrue(null),
  isOnlyOneTrue(undefined),
  isOnlyOneTrue([]),
  isOnlyOneTrue([false]),
  isOnlyOneTrue({}),
  isOnlyOneTrue(new Array(3)),
  isOnlyOneTrue(1/0),
];

console.log('final results : ', ...results);
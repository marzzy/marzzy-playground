function decode(encoded, first) {
  // result = [first];
  // perv = first;
  // for item in encoded(i as index)
    // result.push(perv - item)
    // perv -= item
  let result = [first];
  let perv = first;

  encoded.forEach(item => {
    const newItem = item ^ perv;

    result.push(newItem);
    perv = newItem;
  })

  return result;
};

console.log('([1,0,2,1]): ', decode([1, 2, 3], 1));
console.log('([4,2,0,7,4]): ', decode([6, 2, 7, 3], 4));
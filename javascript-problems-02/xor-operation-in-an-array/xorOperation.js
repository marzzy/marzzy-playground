function xorOperation(n , start) {
  //1th way
  // COUNTER = 0, nums = []
  // while(n < counter)
    // nums[counter] = start + 2*counter
    // counter++
  //return all num in nums bitwise

  //2nd way
  // or instead of making nums then bitwise, bitwise the same time and save the result instead of nums
  
  let counter = 1;
  let result = start;

  while(n > counter) {
    result = result ^ (start + 2*counter);
    counter++;
  }
  return result;

};

console.log('(8): ', xorOperation(5, 0));
console.log('(8): ', xorOperation(4, 3));
console.log('(7): ', xorOperation(1, 7));
console.log('(2): ', xorOperation(10, 5));
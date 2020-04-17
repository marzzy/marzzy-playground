function *foo(x) {
  let theVal = x * (yield);
  return theVal;
}

it = foo(5);
it.next();

console.log(it.next(3));
function *foo(x) {
  let theVal = x * (yield true);
  return theVal;
}

it = foo(5);

if (it.next().value){
  console.log('lets continue the foo');
  console.log(it.next(3));
} else {
  console.log('this is the end');
}

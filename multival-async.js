function setX(initialVal){
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve( initialVal * 2 );
    }, 1000)
  })
}

// 1th solution
function setMultiValuesAsync1th(seed) {
  let y = seed + 5;

  return setX(y).then(function (x) {
    return ([x,y]);
  })
}

let p1 = setMultiValuesAsync1th(1);

p1.then(function ([first, secound]) {
  console.log('p1 then : ', first, secound)
});

// 2nd solution
function setMultiValuesAsync2nd(seed) {
  let y = seed + 5;

  return [setX(y), Promise.resolve(y)];
}

let p2 = Promise.all(setMultiValuesAsync2nd(1));

p2.then(function ([first,secound]) {
  console.log('p2 then : ', first, secound)
});


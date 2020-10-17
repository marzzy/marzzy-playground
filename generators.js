function *generateNum0to10() {
  let theNum = 0;
  for(let i = 0; i<10; i++) {
    yield ++theNum;
  }
}

for (let v of generateNum0to10()) {
  console.log(v);
}

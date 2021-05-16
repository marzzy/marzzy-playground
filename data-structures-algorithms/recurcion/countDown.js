function countDown(startNum) {
  if(startNum > 0) {
    console.log(startNum);
    startNum--;
    countDown(startNum);
  }
  return console.log('all done!')
}

countDown(6);
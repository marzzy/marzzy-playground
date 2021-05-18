function flat(mainArr) {
  let result = [];

  function setArrResult(arr) {
    for (item of arr) {
      if (!Array.isArray(item)) {
        result.push(item);
      } else {
        setArrResult(item);
      }
    }
  }

  setArrResult(mainArr);
  return result;
}

console.log('[7,1,2,3,"hi",4,5,6] : ', flat([7,[[1,2],[3,["hi"]],4],5,6]));

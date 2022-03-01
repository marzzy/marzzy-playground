function promiseAllPolyfill (promiseArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let isThereNoError = true;
    let fullfilledPromise = 0;

      for(let i = 0; i < promiseArray.length && isThereNoError; i++) {
        promiseArray[i]
          .then(result => results[i] = result)
          .then(() => fullfilledPromise++)
          .catch(error => {
            isThereNoError = false;
            return reject(error);
          }).finally(() => {
            if (fullfilledPromise === promiseArray.length) {
              resolve(results);
            }
          })
      }
  })
}

// promiseAllPolyfill([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000)),  // 3
//   new Promise((re, reject) => setTimeout(reject, 100, 'foo')), // foo
// ]).then(console.log)
// .catch(console.log);


function promiseAllSettledPolyfill (promiseArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let finishedPromise = 0;

    for(let counter = 0; counter < promiseArray.length; counter++) {
      const item = promiseArray[counter];
      const isPromise = !!(typeof item === 'object' && typeof item.then === 'function');
      
      if (isPromise) {
        promiseArray[counter]
          .then(res => results[counter] = {status: "fulfilled", value: res})
          .catch(err => results[counter] = {status: "rejected", reason: err})
          .finally(() => {
            finishedPromise++;
            if(finishedPromise === promiseArray.length) {
              resolve(results);
            }
          });
      } else {
        Promise.resolve(item)
          .then(res => results[counter] = {status: "fulfilled", value: res})
          .catch(err => results[counter] = {status: "rejected", reason: err})
          .finally(() => {
            finishedPromise++;
            if(finishedPromise === promiseArray.length) {
              resolve(results);
            }
          });
      }
    }
  });
}


// promiseAllSettledPolyfill([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000)),  // 3
//   new Promise((re, reject) => setTimeout(reject, 100, 'foo')), // foo
//   23
// ])
// .then(console.log);
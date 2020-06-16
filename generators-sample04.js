// var something = (function(){
// 	var nextVal;

// 	return {
// 		// needed for `for..of` loops
// 		[Symbol.iterator]: function(){ return this; },

// 		// standard iterator interface method
// 		next: function(){
// 			if (nextVal === undefined) {
// 				nextVal = 1;
// 			}
// 			else {
// 				nextVal = (3 * nextVal) + 6;
// 			}

// 			return { done:false, value:nextVal };
// 		}
// 	};
// })();


// function *it() {
//   let nextVal = 1;
//   yield nextVal;

//   while (true) {
//     nextVal = (3 * nextVal) + 6;
//     yield nextVal;
//   }
// }

function* something() {
  try {
    var nextVal;

    while (true) {
      if (nextVal === undefined) {
        nextVal = 1;
      }
      else {
        nextVal = (3 * nextVal) + 6;
      }

      yield nextVal;
    }
  }
  // cleanup clause
  finally {
    console.log("cleaning up!");
  }
}

const it = something();

// console.log('1: ',it.next());		// 1
// console.log('2: ',it.next());		// 9
// console.log('3: ',it.next());		// 33
// console.log('4: ',it.next());		// 105

for (var v of it) {
  console.log(v);

  // don't let the loop run forever!
  if (v > 500) {
    break;
  }
}
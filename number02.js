// random(min, max)
// Math.random()
'use strict';

function random (min,max) {
  return min + Math.random() * (max - min);
};

alert(random(1, 5)); // 1.2345623452
alert(random(1, 5)); // 3.7894332423
alert(random(1, 5)); // 4.3435234525

// Run Environment:        Node
// Name:                   remainedTime
// Problem Source:         Interview Question
// Problem Difficalty:     easy
// Source Link:            -

function remainedTime(arr, target) {
  const targetHour = +target.slice(0, 2);
  const targetMin = +target.slice(3, 5) + (targetHour * 60);
  const targetSec = +target.slice(6, 10) + (targetMin * 60);

  return arr.map(item => {
    const itemHour = +item.slice(0, 2);
    const itemMin = +item.slice(3, 5) + (itemHour * 60);
    const itemSec = +item.slice(6, 10) + (itemMin * 60);

    if(targetSec - itemSec > 60 ) {
      if(targetMin - itemMin > 60) {
        return `${targetHour - itemHour} hour`
      }
      return `${targetMin - itemMin} min`
    }
    else if (targetSec - itemSec === 0) {
      return 'now'
    }
    return `${targetSec - itemSec} sec`
  })
}

console.log('result: ', remainedTime(['23:05:38', '23:05:02', '23:04:59', '23:04:31', '12:36:07', '08:59:01', '00:00:00'], '23:05:38'))
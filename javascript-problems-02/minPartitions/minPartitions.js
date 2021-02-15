function minPartitions(n) {
  // return [...n].reduce((max, item)=> max > +item ? max : +item , 0);
  return Math.max(...n.split(''));
};

console.log('(3): ', minPartitions('32'));
console.log('(8): ', minPartitions('82734'));
console.log('(9): ', minPartitions('27346209830709182346'));
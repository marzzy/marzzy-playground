// its a using debugger & callstack on debugger example
function wakeUp() {
  return 'wake up buddy';
}
function eat() {
  return 'fill up your coffee and eat sth';
}
function code() {
  return 'time to code';
}
function seeDreams() {
  const dreamSubjects = ['what if I have a unicorn', 'last unresolved bug', 'your imaginary gf/bf'];
  const dreamSubject = dreamSubjects[Math.floor(Math.random()*dreamSubjects.length)];
  return `have a dream about ${dreamSubject}`;
}
function sleep() {
  seeDreams();
  return 'sleep well';
}

function liveOneDayOfProgrammersLife() {
  wakeUp();
  eat();
  code();
  eat();
  sleep();
}

debugger;
liveOneDayOfProgrammersLife();
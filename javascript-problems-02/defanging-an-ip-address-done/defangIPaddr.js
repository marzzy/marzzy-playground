function defangIPaddr(str) {
  return str.split('.').join('[.]');
};

console.log('("1[.]1[.]1[.]1"): ', defangIPaddr("1.1.1.1"));
console.log('("255[.]100[.]50[.]0"): ', defangIPaddr("255.100.50.0"));
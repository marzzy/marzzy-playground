var reverseString = function(s) {
  for(let i = 0; i<= s.length -1-i; i++) {
      let temp = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - i - 1] = temp;
  }
};

let a =['t','h','i','s','a',' ',''];
let b = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
reverseString(b);
console.log(b);
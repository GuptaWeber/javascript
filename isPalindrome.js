function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const string = "abrakadabra";
const pali = "malayalam";

console.log(isPalindrome(string));
console.log(isPalindrome(pali));

/* ----------- Solution 2 -------------- */

function isPalindrome2(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

console.log(isPalindrome2(string));
console.log(isPalindrome2(pali));
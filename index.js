function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

/* 
  same pseudocode i wrote in the previous lab
*/

/*
  Same explanation I wrote in the previous lab
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

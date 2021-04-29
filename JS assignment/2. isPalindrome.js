const isPalindrome = (str) => str === str.split('').reverse().join('')


console.log(isPalindrome('abba'))
console.log(isPalindrome('abbac'))
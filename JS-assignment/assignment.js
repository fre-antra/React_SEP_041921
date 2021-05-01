// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function reverseNum(num) {
  let numStr = "" + num;
  let resultStr = "";
  for (let c of numStr) {
    resultStr = c + resultStr;
  }

  return parseInt(resultStr);
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?
//   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.;

function palindrome(s) {
  let s_ = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let start = 0, end = s_.length - 1;
  while (start < end) {
    if (s_[start] !== s_[end]) return false;
    start++;
    end--;
  }
  return true;
};

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function stringCombinations(str) {
  let combinationsSet = new Set();
  //assume no duplication is allowed
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinationsSet.add(str.slice(i, j));
    }
  }
  return Array.from(combinationsSet);
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.;
// Example string: 'webmaster';
// Expected Output: 'abeemrstw';
// Assume punctuation and numbers symbols are not included in the passed string.;

function alphabeticStr(str) {
  return str.split("").sort().join("");
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox';
// Expected Output: 'The Quick Brown Fox ';

function wordUppercase(str) {
  if (str.length === 0) return str;
  let resultStr = "";
  resultStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    resultStr += str[i];

    if (str[i] === " ") {
      resultStr += str[i + 1].toUpperCase();
      i++;
    }
  }
  return resultStr;
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.;
// Example string: 'Web Development Tutorial';
// Expected Output: 'Development';

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//   Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.;
// Example string: 'The quick brown fox';
// Expected Output: 5;

function countVowel(str) {
  const vowels = 'aeiou';
  str = str.toLowerCase();
  let count = 0;
  for (let c in str) {
    if (vowels.indexOf(c) !== -1) {
      count++;
    }
  }
  return count;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//   Note : A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.;

function checkPrime(num) {
  //iterate from 2 to squrt(num), step=2
  if (num < 2) return false;
  if (num % 2 === 0) return false;
  for (let i = 3; i < Math.sqrt(num) + 1; i = i + 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
//   Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.;

function type(arg) {
  return typeof arg;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.;

function identityMatrix(n) {
  let iMatrix = [];
  for (let i = 0; i < n; i++) {
    let row = new Array(n);
    row = row.fill(0);
    row[i] = 1;
    iMatrix.push(row);
  }
  return iMatrix;
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function second(arr) {
  let arrCopy = arr.slice(0, arr.length - 1).sort();
  return [arrCopy[1], arrCopy[arrCopy.length - 2]];
}

// 12. Write a JavaScript function which says whether a number is perfect.;
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).
//   Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.;

function isPerfect(num) {
  let divisorsSum = 0;
  //num/2 as upper limit
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) divisorsSum += i;
  }
  if (num !== divisorsSum) return false;
  else return true;
}

// 13. Write a JavaScript function to compute the factors of a positive integer.;
function findFactors(int) {
  let factors = new Set();
  //square root as the upper limit
  for (let i = 1; i <= Math.sqrt(int); i++) {
    if (int % i === 0) {
      factors.add(i);
      factors.add(int / i);
    }

  }
  return Array.from(factors);
}

// 14. Write a JavaScript function to convert an amount to coins.;
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]);
// Here 46 is the amount.and 25, 10, 5, 2, 1 are coins.
//   Output : 25, 10, 10, 1;

function amountTocoins(amount, coinType) {
  //assume the list of coins in coinType is sorted from big to small
  let coins = [];
  for (coinVal of coinType) {
    let coinCount = Math.floor(amount / coinVal);
    for (let i = 0; i < coinCount; i++) coins.push(coinVal);
    amount = amount - coinCount * coinVal;
  }
  return coins;
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function exponent(b, n) {
  let res = b;
  if (typeof b !== 'number' || typeof n !== 'number') return "Invalid b or n";
  for (let i = 1; i < n; i++) {
    res = res * b;
  }
  return b + " to the power of " + n + " is " + res;
}

// 16. Write a JavaScript function to extract unique characters from a string.;
// Example string: "thequickbrownfoxjumpsoverthelazydog";
// Expected Output: "thequickbrownfxjmpsvlazydg";

function uniqueChar(str) {
  let stringSet = new Set(str);
  return Array.from(stringSet).join("");
}

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.;
function charCount(str) {
  let charMap = new Map();
  for (const char of str) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, charMap.get(char) + 1);
    }
  }

  charMap.forEach((val, key) => {
    console.log("Character " + key + " appears " + val + " times.");
  });
}

// 18. Write a function for searching JavaScript arrays with a binary search.
//   Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.;

function binarySearch(array, value) {
  if (array.length === 0) return -1;
  if (typeof value !== 'number') return -1;
  //assume array is sorted ascendingly
  //set indices
  let low = 0, high = array.length - 1, mid;
  while (low <= high) {
    mid = Math.ceil((low + high) / 2);
    if (array[mid] < value) {
      //value is in the right half
      low = mid + 1;
    }
    else if (array[mid] > value) {
      //value is in the left half
      high = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}

// 19. Write a JavaScript function that returns array elements larger than a number.;

function larger(arr, num) {
  let result = [];
  for (const elem of arr) {
    if (elem > num) result.push(elem);
  }

  return result;
}

// 20. Write a JavaScript function that generates a string id(specified length) of random characters.;
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function idGenerator(length) {
  const allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  for (let index = 0; index < length; index++) {
    id += allowedCharacters[randomIntBetween(0, allowedCharacters.length - 1)];

  }
  return id;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length(for example 2) combinations in an array.;
// Sample array: [1, 2, 3] and subset length is 2;
// Expected output: [[2, 1], [3, 1], [3, 2], [3, 2, 1]];


function subsetWithFixedLength(arr, subsetLength) {
  let combinationsSet = new Set();
  //assume no duplication is allowed
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < i + subsetLength && i + subsetLength <= arr.length; j++) {
      combinationsSet.add(arr.slice(i, j));
    }
  }
  return Array.from(combinationsSet);
}

console.log(subsetWithFixedLength([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countOccurence(str, letter) {
  if (str.length === 0) return 0;
  let count = 0;
  for (const c of str) {
    if (c === letter) count++;
  }
  return count;
}

console.log(countOccurence('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function nonRepeat(str) {
  let charMap = {};
  for (const c of str) {
    if (!charMap[c]) {
      charMap[c] = 1;
    }
    else {
      charMap[c] = charMap[c] + 1;
    }
  }

  for (const char in charMap) {
    if (Object.hasOwnProperty.call(charMap, char)) {
      if (charMap[char] === 1) return charMap[char];
    }
  }
  //if no character appeared only once, return null
  return null;
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm.;
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //last i elements are already sorted
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.;
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]);
// Expected output: "United States of America"

function Longest_Country_Name(countries) {
  let maxInd = 0;
  for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > countries[maxInd].length) maxInd = i;

  }

  return countries[maxInd];
}

console.log(["Australia", "Germany", "United States of America"]);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.;
function longestSubstring(str) {
  if (str.length < 2) return str.length;
  let maxSubstring = "", left = 0, right = 0;
  //keep an list of indices where the char was last seen
  let lastSeen = new Map();

  while (right < str.length) {
    if (lastSeen.has(str[right])) {
      //we encounter a char that has been seen, but is its index after left index?
      left = (left > lastSeen.get(str[right]) + 1) ? left : lastSeen.get(str[right]) + 1;
    }
    if (maxSubstring.length < (right - left + 1)) {
      maxSubstring = str.slice(left, right + 1);
    }

    lastSeen.set(str[right], right);
    right++;
  }
  // console.log(maxSubstring);
  return maxSubstring;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string.;

//expand from center approach, O(n^2)
//a center can be a char, or between 2 chars
function longestPalindrome(str) {
  if (str.length < 2) return str;
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    //do 2 checks, 1 for odd palindrome, 1 for even palindrome
    let sub1 = checkFromCenter(str, i, i);
    let sub2 = checkFromCenter(str, i, i + 1);
    console.log(sub1, sub2);
    let maxSub = (sub1.length > sub2.length) ? sub1 : sub2;
    if (longest.length < maxSub.length) longest = maxSub;
  }
  return longest;

  function checkFromCenter(str, left, right) {
    //left and right should be initially 
    //the same or (odd palindrome)
    //right=left+1 (even palindrome)
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.;

//reimplement array's map function, which takes a JS function as parameter
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }

  return result;
};

// 29. Write a JavaScript function to get the function name.
function getFuncName(func) {
  return func.name;
}

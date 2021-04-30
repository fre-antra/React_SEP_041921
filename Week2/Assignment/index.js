/* JAVASCRIPT ASSIGNMENT */

/* 1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223 */

// function reverseNumber(num) {
//    let result = Number(num.toString().split("").reverse().join(""))
//    return result;
// }

// console.log(reverseNumber(12345))

/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.*/

// function validPalidrome(str) {
//    let regexStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
//    let left = 0;
//    let right = regexStr.length - 1;

//    while(left < right) {
//       if(regexStr[left] !== regexStr[right]) {
//          return false;
//       }
//       left++;
//       right--;
//    }
//    return true;
// }

// console.log(validPalidrome("racecar"))

/* 3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */
// function combination(str) {
//    listOfStrings = new Array();

//    for(let i = 0; i < str.length; i++) {
//       for(let j = i + 1; j < str.length + 1; j++) {
//          listOfStrings.push(str.slice(i,j))
//       }
//    }
//    return listOfStrings
// }

// console.log(combination("dog"))

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

// function alphabeticalLetters(str) {
//    let alphaStr = str.split("").sort().join("")
//    return alphaStr;
// }

// console.log(alphabeticalLetters("webmaster"))

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

// function upperCase(str) {
//    let strArray = str.split(" ");
//    let newArray = [];

//    for(let i = 0; i < strArray.length; i++) {
//       newArray.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1))
//    }
//    return newArray.join(" ");
// }

// console.log(upperCase("the quick brown fox"))

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

// function longestWord(str) {
//    let strArray = str.split(" ")
//    let result = strArray[0];

//    for(let i = 1; i < strArray.length; i++) {
//       if(result.length < strArray[i].length) {
//          result = strArray[i];
//       }
//    }
//    return result;
// }

// console.log(longestWord("Web Development Tutorial"))

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5 */

// function countVowel(str) {
//    let vowelList = 'aeiouAEIOU';
//    let count = 0;

//    for(let i = 0; i < str.length; i++) {
//       if(vowelList.indexOf(str[i]) !== -1) {
//          count++;
//       }
//    }
//    return count;
// }

// console.log(countVowel("The Equick brooown fox"))

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

// function primeNumber(num) {
//    if(num === 1) {
//       return false;
//    } else if(num === 2) {
//       return true;
//    } else {
//       for(let i = 2; i < num; i++) {
//          if(num % i === 0) {
//             return false;
//          }
//       }
//       return true;
//    }
// }

// console.log(primeNumber(37))

/* 9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */
// function findType(input) {
//    var dataType = [Function, RegExp, Number, String, Boolean, Object]

//    if(typeof input === "object" || typeof input === "function") {
//       for(let i = 0, len = dataType.length; i < len; i++) {
//          if(value instanceof dataType[i]) {
//             return dataType[i]
//          }
//       }
//    }
//    return typeof input
// }

// console.log(findType("hello"))

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

// function matrix(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         console.log(" 1 ");
//       } else {
//         console.log(" 0 ");
//       }
//    }
//    console.log("----------");
//   }
// }

// console.log(matrix(4));


/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

// function findSecondLowestHighest(arr) {
//   let result = []
//   sortedArr = arr.sort((a, b) => a - b);
//   let secondLastIdx = sortedArr.length - 2


//   result.push(sortedArr[1], sortedArr[secondLastIdx])
//   return result;
// }

// console.log(findSecondLowestHighest([1, 6, 3, 5, 4]))


/* 12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

// function isPerfect(number) {
//   let temp = 0;
//   for(let i = 1; i <= number/2; i++) {
//     if(number%i === 0) {
//       temp += i;
//     }
//   }

//   if(temp === number && temp !== 0) {
//     console.log('It is a perfect number.');
//   } else {
//     console.log('It is not a perfect number.')
//   }
// }

// console.log(isPerfect(28))

/* 13. Write a JavaScript function to compute the factors of a positive integer. */
// function factors(num) {
//   let num_factors = [];

//   for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
//     if(num % i === 0 ) {
//       num_factors.push(i)
//     }
//     if(num / i !== i) {
//     num_factors.push(num / i)
//     }
//     num_factors.sort(function(x,y) {
//       return x - y
//     })
//   }
//   return num_factors
// }

// console.log(factors(15))

/* 14. Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1 */

// function amountToCoins(amount, coins) {
//   if(amount === 0) {
//     return [];
//   } else {
//     if(amount >= coins[0]) {
//       left = (amount - coins[0]);
//       return [coins[0]].concat(amountToCoins(left, coins))
//     } else {
//       coins.shift()
//       return amountToCoins(amount, coins)
//     }
//   }
// }

// console.log(amountToCoins(46, [25, 10, 5, 2, 1]))


/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. */

// function exponent(b, n) {
//   let ans = 1;
//   for(let i = 1; i <= n; i++) {
//     ans = b * ans
//   }
//   return ans
//   // return b ** n
// }

// console.log(exponent(2,3))

/* 16. Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg" */

// function unique_char(str1) {
//   let str = str1;
//   let uniql = "";

//   for(let i = 0; i < str.length; i++) {
//     if(uniql.indexOf(str.charAt(i)) == -1) {
//       uniql += str[i];
//     }
//   }
//   return uniql;
// }

// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"))

/* 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. */

function characterCount(str) {
  let characters = {};
  str.replace(/\S/g, function(l){characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1)})
  return characters
}

console.log(characterCount("The quick brown fox jumps over the lazy dog"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// 19. Write a JavaScript function that returns array elements larger than a number.

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

// 29. Write a JavaScript function to get the function name.

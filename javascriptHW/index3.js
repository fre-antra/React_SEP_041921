// 21. Write a JavaScript function to get all possible subset with a fixed length 
// (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter 
// and the function will count the number of occurrences of the specified letter 
// within the string.
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3

const countOneLetter = (str, l) => {
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == l) ans++
  }
  return ans;
}

// console.log(countOneLetter('microsoft.com', 'o'))

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec' 
// Expected output : 'e'

const firstUniqueCharacter = str => {
  let queue = [];
  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] == undefined) {
      count[str[i]] = 1
      queue.push(str[i])
    } else {
      count[str[i]] += 1;
    }
  }
  while (queue.length) {
    let letter = queue.shift()
    if (count[letter] === 1) return letter;
  }
  return false;
}

// console.log(firstUniqueCharacter('abacddbec'))


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simple sorting algorithm that works by repeatedly stepping through the list to be 
// sorted, comparing each pair of adjacent items and swapping them if they are in the wrong 
// order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

const bbSort = arr => {
  let changed = false;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    if (a < b) {
      let temp = a;
      arr[i] = b;
      arr[i + 1] = temp;
      changed = true;
    }
  }
  if (changed) {
    return bbSort(arr);
  }
  return arr;
}

// const test = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

// console.log(bbSort(test))

// 25. Write a JavaScript function that accept a list of country names as input and 
// returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

const longestCountryName = countries => {
  return countries.reduce((acc, cur) => (acc.length < cur.length) ? cur : acc)
}

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a given a string without 
// repeating characters. 

var longestNonRepeatingSubstring = function(s) {
  let temp = {};
  let lastRepeatedIndex = 0;
  let indexes = [0, 0];
  for (var i = 0; i < s.length; i++) {
    let letter = s[i];
    if (temp[letter]) {
      let prevMax = indexes[1] - indexes[0]
      if (prevMax < i - lastRepeatedIndex) {
        indexes[0] = lastRepeatedIndex;
        indexes[1] = i
      }
      lastRepeatedIndex = Math.max(lastRepeatedIndex, temp[letter])
    }
    temp[letter] = i + 1;
  }

  let prevMax = indexes[1] - indexes[0];

  if (prevMax < i - lastRepeatedIndex) {
    indexes[0] = lastRepeatedIndex;
    indexes[1] = i
  }
  return s.slice(indexes[0], indexes[1]);
};

// console.log(longestNonRepeatingSubstring("abcdeqwedadefghijklmnopqfassd"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring 
// or longest symmetric factor problem is the problem of finding a maximum-length 
// contiguous substring of agiven string that is also a palindrome. 
// For example, the longest palindromic substring of"bananas" is "anana". 
// The longest palindromic substring is not guaranteed to be unique; 
// For example, in the string "abracadabra", there is no palindromic substring with 
// length greater than three, but there are two palindromic substrings with length three, 
// namely, "aca" and "ada".In some applications it may be necessary to return all maximal 
// palindromic substrings (that is, allsubstrings that are themselves palindromes and 
// cannot be extended to larger palindromicsubstrings) rather than returning only one 
// substring or returning the maximum length of apalindromic substring.

const longestPalindrome = function (string) {
  let answer = '';
  const checkPalindrome = (string, left, right) => {
    while (left >= 0 && right < string.length && string[left] == string[right]) {
      left--;
      right++;
    }
  
    return string.substring(left + 1 , right);
  }
  for (let i = 0; i < string.length; i++) {
    let case1 = checkPalindrome(string, i, i);
    let case2 = checkPalindrome(string, i, i+1);
    let longest = (case1.length > case2.length) ? case1 : case2;
    if (longest.length > answer.length) {
      answer = longest;
    }
  }

  return answer;
};

console.log(longestPalindrome("bananas"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// 29. Write a JavaScript function to get the function name.
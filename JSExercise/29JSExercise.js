// 1
const reverseNumber = (number) =>
  parseInt(number.toString().split("").reverse().join(""));

  // 2
const isPalidrome = (str) => {
  let left = 0,
    right = str.toString().length - 1;

  while (left < right) {
    if (str[left] != str[right]) return false;
    left++;
    right--;
  }

  return true;
};

// 3
const combination = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

// 4
const alphabetOrder = (s) => {
  let temp;
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return str.join("");
};

// 5
const capitalize = (str) => {
  return str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
};

//6
const longestString = (str) => {
  let arr = str.split(" ");
  let maxIndex = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      maxIndex = i;
    }
  }

  return arr[maxIndex];
};

//7
function isCharacterVowel(char) {
  let vowelArr = ["u", "e", "o", "a", "i"];

  for (let i in vowelArr) {
    if (vowelArr[i] === char) return true;
  }

  return false;
}

function isCharacterVowel2(char) {
  if (char.length === 1) return /[ueoai]/.test(char);
}

const countVowel = (str) => {
  const modifiedStr = str.split(" ").join("");
  let count = 0;
  for (let i in modifiedStr) {
    if (isCharacterVowel2(modifiedStr[i])) count++;
  }
  return count;
};

// 8
const isOddNumber = (number) => {
  return number % 2;
};
const isPrimeNumber = (number) => {
  if (number === 2) return true;
  if (number < 2) return false;

  //   any even number exceed 2 is not prime number
  if (isOddNumber(number)) {
    for (let i = 3; i <= number / 3; i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  }
  return false;
};

//9
const typeOfArgument = (arg) => {
  return typeof arg;
};

// 10
const getIdentitymatrix = (n) => {
  let rows = [];
  for (let i = 0; i < n; i++) {
    // create a whole new arrays;
    let newArr = new Array();
    for (let j = 0; j < n; j++) {
      if (j === i) newArr[j] = 1;
      else newArr[j] = 0;
    }
    rows.push(newArr);
  }
  return rows;
};

// 11
const secondGreatestSmallest = (array) => {
  if (typeof array != "object") return -1;

  if (array.length < 4) return -1;
  let arr = [...array];
  let smallest = Math.min(...arr);
  let biggest = Math.max(...arr);
  arr.splice(arr.indexOf(smallest), 1);
  arr.splice(arr.indexOf(biggest), 1);
  smallest = Math.min(...arr);
  biggest = Math.max(...arr);
  return [smallest, biggest];
};

// 12
const isPerfectNumber = (number) => {
  if (number < 2) return false;
  var sumOfPositiveDivisors = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) sumOfPositiveDivisors += i;
  }

  return number === sumOfPositiveDivisors ? true : false;
};

//13
const getPositiveDivisors = (number) => {
  let result = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) result.push(i);
  }
  result.push(number);
  return result;
};

//14
const amountTocoins = (amount, sortedArray) => {
  let result = [];
  let index = 0;

  while (amount > 0) {
    while (amount >= sortedArray[index] && index < sortedArray.length) {
      amount -= sortedArray[index];
      result.push(sortedArray[index]);
    }
    index++;
  }

  return result;
};

//15
const exp = (b, n) => {
  if (n === 0) return 1;
  if (b === 0) return 0;
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= b;
  }
  return result;
};

//16
const uniqueLetters = (str) => {
  const result = [];
  for (let char of str) {
    if (!result[char]) result[char] = char;
  }
  return Object.keys(result).join("");
};

// 17
const countOccurences = (str) => {
  const result = [];
  for (let char of str) {
    if (result[char] === undefined) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
};

// 18
const binarySearch = (arr, number) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] == number) {
      return true;
    } else if (arr[middle] < number) {
      start = middle + 1;
    } else if (arr[middle] > number) {
      end = middle - 1;
    }
  }
  return false;
};

// 19
const biggerElementsArray = (arr, numberTobeBigger) => {
  return arr.filter((item) => {
    log(item);
    return item > numberTobeBigger;
  });
};

// 20
const generateId = (l) => {
  if (l === 0) return "";

  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "",
    randomIndex = 0;

  for (let i = 0; i < l; i++) {
    randomIndex = Math.floor(Math.random() * letters.length);
    result += letters[randomIndex];
  }

  return result;
};

//21
const subsets = (arr, l) => {};

// 22
const countLetterOccurence = (str, char) => {
  if (str.length === 0) return 0;

  let index = 0,
    count = 0;

  while (str.indexOf(char) != -1) {
    count += 1;
    index = str.indexOf(char);
    str = str.slice(index + 1);
  }

  return count;
};

// 23
const firstNotRepeatedChar = (str) => {
  const obj = countOccurences(str);
  for (let i in obj) {
    if (obj[i] === 1) return i;
  }
  return "";
};

// 24 Bubble sort
const swap = (arr, i, j) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const bubbleSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

// 25
const longestCountryName = (arr) => {
  let longestName = "";
  arr.map((str) => {
    if (str.length > longestName.length) {
      longestName = str;
    }
  });
  return longestName;
};

// 26
Object.prototype.getSize = function () {
  let count = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key)) count++;
  }
  return count;
};

const longestSubstringWithoutRepeatCharacters = (input) => {
  var chars = input.split("");
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};

  for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) {
      str += curr_char;
      hash[chars[i]] = { index: i };
      console.log(str, hash);
    } else {
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      var prev_dupeIndex = hash[curr_char].index;
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + curr_char;
      console.log(prev_dupeIndex, str_FromPrevDupe, curr_char, str, i)
      hash = {};
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[chars[j]] = { index: j };
      }
      log(hash);
      log("-----")
    }
  }
  return longest_string.length > str.length ? longest_string : str;
};
// 27
const longestPalindromeSubstring = (str) => {
    // Very Inefficient
    // step 1 generate all the substring that is palindrome
    let palindromeSubstrings = combination(str).filter((item) => isPalidrome(item) && item.length != 1);
    let longestPalindrome = '';
    // step 2 find the longest palindrome
    palindromeSubstrings.filter((substr) => {
        if (substr.length > longestPalindrome.length) {
            longestPalindrome = substr;
            return true;
        } else 
        return false;
    })
    return longestPalindrome;
}
// 28
const functionWithAFunctionParameter = (cb, ...args) => {
  return cb(...args);
};

// 29
function getFunctionName(cb) {
  // 1st way: Fastest because function is an object that has "name" property
  return cb.name;

  // 2nd way: String manipulation
  let temp = cb.toString();

  if (temp.indexOf("function") != -1) {
    let start = "function".length;
    let end = temp.indexOf("(");
    return temp.slice(start, end);
  } else {
    return "";
  }
}

// passby value and ref
//let obj = {a:1 , c:3};
//let z = 2;
//const pass = (obj) => {
//    obj = 3;
//}
//pass(z);
//log(z);

function log(str) {
  console.log(str);
}
//log(reverseNumber(1234);
//log(isPalidrome("ababa"));
//log(combination("dog"))
//log(alphabetOrder("webmaster"));
//log(capitalize("the quick brown fox"));
//log(longestString("Web Development Tutorial"));
//log(countVowel("The quick brown fox"))
//log(isPrimeNumber(9));
//log(typeOfArgument());
//log(getIdentitymatrix(4));
//log(secondGreatestSmallest([1, 2, 3, 4]));
//log(isPerfectNumber(6));
//log(getPositiveDivisors(27))
//log(amountTocoins(48, [25, 10, 5, 2, 1].sort(function(a, b){return b - a})));
//log(exp(2,10))
//log(uniqueLetters("ddDmmmyy"));
//log(countOccurences("dddDmmmyy"));
//log(binarySearch([1,2,3,4,5,9], 2));
//log(biggerElementsArray([1,2,3,4,5,6,7], 2));
//log(generateId(10));
//log(countLetterOccurence('microsoft.com', "o"));
//log(longestCountryName(["Germany","Australia",  "United States of America"]))
//log(firstNotRepeatedChar("asedbasd"));
//log(bubbleSort([2, 3, 4, 1, 7, 9]));
//log(longestSubstringWithoutRepeatCharacters("banimortalityaaanasd"));
//log(longestPalindromeSubstring("bananas"));
//log(functionWithAFunctionParameter((a, b) => {
//    return a + b;
//  }, 1 , 2));
//function newfunciton_123() {
//    log(123);
//}
//log(getFunctionName(newfunciton_123))

function cb() {
  console.log("Running");
}



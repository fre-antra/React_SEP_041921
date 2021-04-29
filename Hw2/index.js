//Question 1

var reverseStr = function (s) {
    return s.reverse();
};

// console.log(reverseStr(["a", "d", "b", "d"]));

//Question 2
var isPalindrome = function (s) {
    var temp = s.replace(/[^a-zA-Z0-9]/g, "");
    temp = temp.toLowerCase();
    var start = 0;
    var end = temp.length - 1;
    while (start < end) {
        if (temp[start] != temp[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// console.log(isPalindrome("bab"));

// Question Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
var combinationStr = function (s) {
    strList = new Array();

    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length + 1; j++) {
            strList.push(s.slice(i, j));
        }
    }
    return strList;
};

// console.log(combinationStr("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

var sortString = function (s) {
    var res = s.replace(/[^a-zA-Z0-9]/g, "").split("");
    console.log("splited : " + res);
    var tmp;
    for (var i = 0; i < res.length; i++) {
        for (var j = i + 1; j < res.length; j++) {
            /* if ASCII code greater then swap the elements position*/
            if (res[i] > res[j]) {
                tmp = res[i];
                res[i] = res[j];
                res[j] = tmp;
            }
        }
    }
    return res.join("");
};

// console.log(sortString("abc.de.af"));
//Question 5 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

var convertFirstLetterInWordToUpperCase = function (s) {
    var temp = s.split(" ");

    var result = new Array();
    for (var i = 0; i < temp.length; i++) {
        result[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }

    return result.join(" ");
};
// console.log(convertFirstLetterInWordToUpperCase("the quick brown fox"));

//Question 6 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

var longestString = function (s) {
    var strSplit = s.split(" ");
    var longestWord = 0;
    var res = "";
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            res = strSplit[i];
        }
    }
    return res;
};
// console.log(longestString("The quick brown fox jumped over the lazy dog"));

//Question 7 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

var countVowelInString = function (s) {
    // a e i o u
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (
            s.charAt(i) == "a" ||
            s.charAt(i) == "e" ||
            s.charAt(i) == "i" ||
            s.charAt(i) == "o" ||
            s.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
};
// console.log(countVowelInString("The quick brown fox"));
//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1
//that has no positive divisors other than 1 and itself.

var checkPrime = function (num) {
    let isPrime = true;

    // check if number is equal to 1
    if (num === 1) {
        console.log("1 is not prime");
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }
};

//9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

var checkType = function (obj) {
    return typeof obj;
};

// console.log(checkType(Object));
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
var matrixSize = function (n) {
    return [n.length, n.length];
};

// console.log(
//     matrixSize([
//         [0, 1],
//         [1, 3],
//         [2, 6],
//     ])
// );
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
var secondLowestAndSecondHighest = function (num) {
    var secondLow = 0;
    var secondHigh = 0;

    const sortedNum = [...num].sort((a, b) => a - b);

    secondLow = sortedNum[1];
    secondHigh = sortedNum[sortedNum.length - 2];

    var result = new Array();

    result[0] = secondLow;
    result[1] = secondHigh;

    return result;
};
// console.log(secondLowestAndSecondHighest([1, 2, 413, 43, 24, 3]));

//12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive
// integer that is equal to the sum of its proper positive divisors, that is,
//  the sum of its positive divisors excluding the number itself (also known
// as its aliquot sum). Equivalently, a perfect number is a number that is half the
// sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive
// divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all
// its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
// This is followed by the perfect numbers 496 and 8128.
var perfectNum = function (num) {
    var temp = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }
    if (temp === num && temp !== 0) {
        return true;
    } else {
        return false;
    }
};

//13. Write a JavaScript function to compute the factors of a positive integer.

function factors(num) {
    var factors = [],
        i;
    for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
        if (n % i === 0) {
            factors.push(i);
            if (n / i !== i) factors.push(num / i);
        }
    const sortedNum = [...factors].sort((a, b) => a - b);
    return sortedNum;
}
//14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
var amountTocoins = function (num, coins) {
    var left = 0;
    var amount = 0;
    if (num === 0) {
        return [];
    } else {
        if (num >= coins[0]) {
            left = amount - coins[0];
            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
};

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
//15. Write a JavaScript function to compute the value of
//  bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
var calculateExponent = function (b, n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res = b * res;
    }
    return res;
};
//
// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
var removeDuplicateCharacter = function (s) {
    var resultSet = new Set();
    for (var i = 0; i < s.length; i++) {
        resultSet.add(s.charAt(i));
    }

    [...resultSet].join(" ");
    return resultSet;
};

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
var letterOccurrence = function (s) {
    var temp = string.split("").sort().join("");
    var counter = 1;
    var map = new Map();
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == temp[i + 1]) {
            counter++;
        } else {
            console.log(temp[i] + " " + counter);
            map.set(temp[i], counter);
            counter = 1;
        }
    }
    return map;
};

//18. Write a function for searching JavaScript arrays with a binary search.
var binarySearch = function (arr, x, start, end) {
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return true;

    if (arr[mid] > x) return binarySearch(arr, x, start, mid - 1);
    else return binarySearch(arr, x, mid + 1, end);
};

//19. Write a JavaScript function that returns array elements larger than a number.
var allBigElements = function (num) {
    return function (evalue, index, array) {
        return evalue >= num;
    };
};
// var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));
// console.log(result);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
var randomID = function (num) {
    var result = "";
    var randomSeed = Math.ceil(Math.random()) * num;
    var charList =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < num; i++) {
        result += charList.charAt(
            Math.floor(Math.random() * charList.length * randomSeed)
        );
    }
    return result;
};

/*ss

21. Write a JavaScript function to get all possible subset with a
fixed length (for example 2) combinations in an array. 
Sample array : [1, 2, 3] and subset length is 2 
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'microsoft.com', 'o' 
Expected output : 3 

23. Write a JavaScript function to find the first not repeated character. 
Sample arguments : 'abacddbec' 
Expected output : 'e' 

24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"

26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

29. Write a JavaScript function to get the function name. 

*/

/* 1. Write a JavaScript function that reverse a number. */
function reverse(num) {
    num = String(num);
    return num.split("").reverse().join("");
}
console.log(reverse(32243));        // 34223


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? */
function checkPalindrome(str) {
    flag = false;
    var res = str.split("").reverse().join("");
    for(var i = 0; i < str.length; i++) {
        if(res[i] === str[i]) flag = true;
    }
    if(flag === true)
        console.log("True");
    else
        console.log("False");
}
checkPalindrome("nurses run");

/* 3. Write a JavaScript function that generates all combinations of a string. */
function combString(str) {
    var arr = [];
    
    for(var i = 0; i < str.length; i++) {
        for(var j = i + 1; j < str.length + 1; j++) {
            arr.push(str.slice(i, j));
        }
    }
    return arr;
}
console.log(combString("dog"));

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. */
function alphabeticalOrder(str) {
    return str.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  */
function convertToUpperCase(str) {
    var res = str.split(" ");
    var array = [];
    for(var i = 0; i < res.length; i++) {
        array.push(res[i][0].toUpperCase() + res[i].slice(1));
    }
    return array.join(" ");
}
console.log(convertToUpperCase("the quick brown fox"));

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */
function longestWord(str) {
    var res = str.split(" ");
    var longest = "";
    for(let i = 0; i < res.length; i++) {
        if(res[i].length > longest.length) {
            longest = res[i];
        }
    }
    console.log(longest);
}
longestWord("Web Development Tutorial");

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. */
function countVowel(str) {
    const count = str.match(/[aeiou]/gi).length
    console.log(count);
}
countVowel("The quick brown fox");

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */
function checkPrime(num) {
    var isPrime = true;
    if(num === 1) {
        isPrime = false;
        console.log(isPrime);
    }
    else {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                isPrime = false;
                break;        
            }              
        }
        console.log(isPrime);
    }
}
checkPrime(67);

/* 9. Write a JavaScript function which accepts an argument and returns the type. */
function checkType(arg) {
    console.log(typeof(arg));
}
checkType(1);

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */
function matrix(n) {
    var arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = [];
        for(let j = 0; j < n; j++) {
            if(i === j) {
                arr[i][j] = "O";
            }
            else 
                arr[i][j] = "X";
        }
        console.log(arr[i]);
    }
}
matrix(4);

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. */
function findSecond(arr) {

    arr.sort();
    let uniqueNum = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    var secondLowest = uniqueNum[1];
    var secondGreatest = uniqueNum[uniqueNum.length - 2];

    console.log("Second lowest #:", secondLowest, "and Second Greatest #: " + secondGreatest);
}
var arr = [0,1,1,2,2,0,3,4,5,7];
findSecond(arr);

/* Write a JavaScript function which says whether a number is perfect. */
function findPerfect(num) {
    var isPerfect = false;
    var arr = [];
    var sum = 0;
    for(let i = 1; i <= num; i++) {
        if(num % i == 0){
            arr.push(i);
        }
    }
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if((sum/2) === num) {
        isPerfect = true;
    }
    console.log(isPerfect);
}
findPerfect(496);

/* 13. Write a JavaScript function to compute the factors of a positive integer. */ 
function findFactors (num) {
    var arr = [];
    if(num < 0)
        console.log(num, "is not a positive Integer");
    else {
        for(let i = 1; i <= num; i++) {
            if(num % i === 0) 
                arr.push(i);
        }
    }
    console.log(arr);
}
findFactors(25);

/* 14. Write a JavaScript function to convert an amount to coins. */
function amountToCoins(num, arr) {
    var i = 0;
    var change = [];
    while(i <= arr.length) {
        if(num >= arr[i]) {
            num = num - arr[i];
            change.push(arr[i]);
        }
        else
            i++;
    }
    console.log(change);
}
amountToCoins(71, [25, 10, 5, 2, 1]);

/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.  */
function computebn(b,n) {
    console.log(Math.pow(b,n));
}
computebn(5,3);

/* 16. Write a JavaScript function to extract unique characters from a string. */
function findUniqueChar(str) {
    var arr = str.split("");
    let uniqueChar = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    console.log(uniqueChar.join(""));
}
findUniqueChar("thequickbrownfoxjumpsoverthelazydog");

/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.  */
function countLetter(str) {
    string = str.split("").join("");
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (string[i] == string[i + 1]) {
            count++;
        } else {
            console.log(string[i] + ": " + count);
            count = 1;
        }
    }
  }
  countLetter("thequickbrownfoxjumpsoverthelazydog");

/* 18. Write a function for searching JavaScript arrays with a binary search.  */
function binarySearch(arr, num) {
    var startIndex = 0;
    var lastIndex = arr.length - 1;
    var middleIndex = Math.floor((startIndex + lastIndex) / 2);

    while(arr[middleIndex] != num && startIndex < lastIndex) {
        if(num < arr[middleIndex])
            lastIndex = middleIndex - 1;
        else if (num > arr[middleIndex])
            startIndex = middleIndex + 1;
        middleIndex = Math.floor((startIndex + lastIndex) / 2);
    }
    console.log((arr[middleIndex] != num) ? "Not Found" : "Found on index " + middleIndex);
}
binarySearch([1,2,3,4,5,6,7,8,9], 5);

/* 19. Write a JavaScript function that returns array elements larger than a number. */
function largerNumber(arr, num) {
    var arr1 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
}

largerNumber([1,2,3,4,5], 4);

/* 20. Write a JavaScript function that generates a string id (specified length) of random characters. */
function randomString(length) {
    var res = "";
    var randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++) {
        res += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    }
    console.log(res);
}
randomString(30);

/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. */
function combinations(array) {
    return new Array(1 << array.length).fill().map(
      (e1, i) => array.filter((e2, j) => i & 1 << j));
  }
  
console.log(combinations([1, 2, 3]).filter(a => a.length >= 2))

/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. */
function countSpecifiedLetter(str, char) {
    var arr = str.split("");
    var count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == char)
            count++;
    }
    console.log(count);
}
countSpecifiedLetter("microsoft.com", 'o');

/* 23. Write a JavaScript function to find the first not repeated character. */
function findRepeat(str) {
    var count;
    for(let i = 0; i < str.length; i++) {
        count = 0;
        for(let j = 0; j < str.length; j++) {
            if(str[i] === str[j]) count++;
        }
        if(count === 1) {
            console.log(str[i]);
            break;
        }
    }
}
findRepeat('aaaaabaaaa');

/* 24. Write a JavaScript function to apply Bubble Sort algorithm. */
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

/* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. */
function longestCountry(arr) {
    var count = 0;
    var longest;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i].length > count)
                longest = arr[i];
        }
    }
    console.log(longest);
}
longestCountry(["Australia", "Germany", "United States of America"]);

/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. */
function longestSubstring(str) {
    var arr = str.split("");
    let uniqueChar = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    console.log(uniqueChar.join(""));
}
longestSubstring("asdasd");

/* 27. Write a JavaScript function that returns the longest palindrome in a given string. */
function longestPalindrome(str) {
    var arr = str.split("");
    var res = [];

    for(let i = 0; i < str.length; i++) {
        var temp = "";
        temp = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            temp += arr[j]
            if(temp === temp.split("").reverse().join("")) {
                res.push(temp);
            }
        }
    }
    return (function checkLongest(count, longest) {
        count = 0;
        longest = "";
        for(var i = 0; i < res.length; i++) {
            if(count >= res[i].length)
                longest = res[i-1];
            else
                count = res[i].length;
        }
        console.log(longest);
    })();
}
longestPalindrome("abracadabra");

/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */
function func(cb) {
    cb();
}
function callback() {
    console.log("Hello");
}
func(callback);

/* 29. Write a JavaScript function to get the function name. */
function getFuncName() {
    console.log(getFuncName.name);
}
getFuncName();
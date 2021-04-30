// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function foo1(n) {
    return Number(String(char).split("").reverse().join(""));
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function foo2(char) {
    let format = char.toLowerCase().replace(/\s+/g, "");
    let reverse = format.split("").reverse().join("");
    return reverse == format? "palindrome" : "not palindrome";
};

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function foo3(char) {
    let result = [];
    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < char.length; j++) {
            if (char.slice(i, j + 1)) {
                result.push(char.slice(i, j + 1));
            }
        }
    }
    return result;
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function foo4(char) {
    return char.split("").sort().join("")
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function foo5(char) {
    let capitalized = "";
    let flag = 0;
    for (let i = 0; i < char.length; i++) {
        if (i == 0 || flag == 1) {
            capitalized += char[i].toUpperCase();
            flag = 0
        } else {
            capitalized += char[i]
        }
        if (char[i] == " ") {
            flag = 1;
        }
    }
    return capitalized;
};

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function foo6(char) {
    let longest = "";
    let words = char.split(" ")
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
};

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function foo7(char) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < char.length; i++) {
        if (vowels.includes(char[i])) {
            count += 1;
        }
    }
    return count;
};

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function foo8(n) {
    let flag = true;
    if (n <= 1) {
        return "not prime"
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
            }
        }
    }
    return flag ? "prime" : "not prime";
};

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function foo9(arg) {
    return typeof arg;
};

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function foo10(n) {
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n)
        for (let j = 0; j < n; j++) {
            if (i == j) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
};

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function foo11(n) {
    const result = n.filter((value) => {
        return value != Math.max(...n) && value != Math.min(...n)
    });
    return [Math.min(...result), Math.max(...result)]
};

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function foo12(n) {
    let divisors = [];
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return sum == n ? "perfect number" : "not perfect number";
};

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function foo13(n) {
    let factors = [];
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }
    return factors;
};

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function foo14(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
};

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function foo15(b, n) {
    let result = b;
    for (let i = 1; i < n; i++) {
        result *= b;
    }
    return result;
};

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function foo16(char) {
    return [...new Set(char.split(""))].join("");
};

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

function foo17(char) {
    const result = {};
    for (let i = 0; i < char.length; i++) {
        result[char[i]] ? result[char[i]] += 1 : result[char[i]] = 1;
    }
    return result
};

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function foo18(target, arr) {
    arr = arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        if (target >= arr[Math.floor(arr.length / 2)]) {
            arr = arr.slice(Math.floor(arr.length / 2));
        } else {
            arr = arr.slice(0, Math.floor(arr.length / 2));
        }
    }
    return arr[0] == target ? true : false ;
}

// 19. Write a JavaScript function that returns array elements larger than a number. 

function foo19(target, arr) {
    return arr.filter((item) => item > target);
};

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function foo20(len, char) {
    let id = "";
    for (let i = 0; i < len; i++) {
        id += char[Math.round(Math.random()*char.length)];
    }
    return id;
};

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// function foo21(sub, arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.slice(i+1).length; j ++) {
//             result.push(String(arr[i]) + String(arr.slice(i+1)[j]));
//         }
//     }
//     return result;
// };

function foo21(sub, arr) {
    var head, tail
    var result = [];
    if (sub == arr.length) {
        return arr
    }
    for (let i = 0; i < arr.length; i++) {
        head = arr.slice(i, i+1);
        for (let j = 0; j < arr.length - sub + 1; j++) {
            tail = foo21(sub-1, arr.slice(i+j+1, i+j+sub))
            if (tail.length > 0) {
                result.push(head.concat(tail))
            }
        }
    }
    return result
}

console.log(foo21(3, [1, 2, 3, 4]))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

function foo22(char, target) {
    let count = 0;
    for (let i = 0; i < char.length; i++) {
        if (char[i].toLowerCase() == target.toLowerCase()) {
            count += 1;
        }
    }
    return count;
}

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function foo23(char) {
    for (let i = 0; i < char.length; i++) {
        let flag = 0;
        let temp = char.slice(0, i).concat(char.slice(i + 1))
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] == char[i]) {
                flag = 1;
            }
        }
        if (flag == 0) {
            return char[i];
        }
    }
    return 'no value'
};

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function foo24(arr) {
    let tmp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j+1]) {
                tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
};

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function foo25(arr) {
    let longest = [0, ""];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest[0]) {
            longest[1] = arr[i];
        }
    }
    return longest[1];
};

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function foo26(char) {
    let longest = [0, ""];
    for (let i = 0; i < char.length; i++) {
        let substring = char[i];
        let flag = 0;
        for (let j = 0; j < char.slice(i+1).length; j++) {
            if (substring.indexOf(char.slice(i+1)[j]) == -1 && flag == 0) {
                substring += char.slice(i+1)[j];
            } else {
                flag = 1;
            }
        }
        if (substring.length > longest[0]) {
            longest[0] = substring.length;
            longest[1] = substring;
        }
    }
    return longest;
};

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

function foo27(char) {
    let longest = [0, ""];
    for (let i = 0; i < char.length; i++) {
        let subchar = char.slice(i+1);
        let substring = "";
        for (let j = 0; j < subchar.length; j++) {
            substring += subchar[j];
            if (substring == substring.split("").reverse().join("")) {
                if (substring.length > longest[0]) {
                    longest[0] = substring.length;
                    longest[1] = substring;
                }
            }
        }
    }
    return longest;
};

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function foo28(f) {
    f();
}

// 29. Write a JavaScript function to get the function name. 

function foo29(f) {
    return f.name
}
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function reverseNumber(x){
    let result = 0;  
    let k =  x < 0 ? -1 : 1;
    x *= k;
    
    while(x){
      result = (result*10) + (x %10) 
       x = Math.floor(x/10);
    
    }
    
    if (result >  2**31) return 0;
   
    
    
    return  result * k;
 
}

console.log("1. reverse Number:",reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome(str){
    let start = 0
    let end = str.length -1

    while(start<end){
        if(str[start++] !== str[end--]) return false
    }
    return true

}


console.log("2. Is palindrome: ",palindrome("racecar"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function stringCombinations(str){
   list = [];
   for(i=0;i<str.length;i++) {
       for(j=i+1;j<str.length+1;j++) {
           list.push(str.slice(i, j));
       }
   }
   return list;
}


console.log("3. string combinations are: "+ stringCombinations("dog"))
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const sortString = str => str.split("").sort().join("")

console.log("4. Sort String: " + sortString("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

const upperCase = (str) => str.split(" ").map(i=> i[0].toUpperCase() + i.substring(1)).join(" ")

console.log("5. UpperCase first letter: " + upperCase("the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function longestWord(str){
    let i =""
    str.split(" ").forEach(j=>{ if(i.length < j.length ) i = j})
    return i
}

console.log("6. longest Word: " + longestWord('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

const vowelCount = (str) => str.split('').filter(i=> "aeiouAEIOU".includes(i)).length;

console.log("7. Number Vowel: " + vowelCount('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function prime(num){
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
  }




  console.log("8. is prime: "+ prime(2))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const type = n => typeof n

console.log("9. Type is : " + type(23))
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(n) {

    let i;
    let j;

    for (i=0; i < n; i++){
      for (j=0; j < n; j++){
           if (i === j){
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }

   console.log(matrix(4))

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

const lowAndGreater = n => [ n[1], n[n.length-2] ]

console.log("11. lowest and greater are: "+lowAndGreater([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfect(n){

let sum = 0 

for (var i = 1; i < n; i++) {
    if (n % i == 0) sum += i;
}

if (sum == n) return "number is perfect"; 

return "number is not a perfect";
}

console.log("12. prefect number: ",perfect(28))
// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factor(n){
    const result = []
    for(let i = 0; i < n+1; i++){
        if(n % i == 0) result.push(i)
    }

    return result
}

console.log("13. factor is: "+ factor(17))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function amountTocoins(amount,coin){
  const result = []
  
  for (var i=0; i<coin.length; i++) {
    if (amount>=coin[i]) {
        amount -= coin[i];
        result.push(coin[i--])
    }
  }

  return result
}


console.log("14. coins are: "+ amountTocoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function computeBn(b,n)  {  
    let base = 1;  
    for (var i =0; i < n; i++)  
    {  
            base *= b ;        
    }  
    return base;  
}  

console.log("16 compute bn: "+computeBn(2,3))
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

const uniqCharacters = str => [...new Set(str)].join("")

console.log("16. unique characters: "+ uniqCharacters("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function count (str) {  
  
    const newHash = {};
    str.split('').forEach(i => {newHash[i] ? newHash[i]++ : newHash[i] = 1;});
    return newHash
 }

 console.log("17. count")
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = (arr, item) => {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
     
      if (arr[mid] === item) return mid;
      if (arr[mid] < item) left = mid + 1
      else right = mid - 1;
    }
    return null;
   }
   console.log("18. binary search")
// 19. Write a JavaScript function that returns array elements larger than a number. 
function largeArr(value) {
    return function(element, index, array) {
      return (element >= value);
    }
  }
  var arr = [12, 5, 8, 130, 44].filter(largeArr(10));
  console.log("19: ",arr )

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomCharacters(n){
    let text = "";
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i < n; i++ )
    {  
    text += char.charAt(Math.floor(Math.random() * char.length));
    }
    return text;
}

console.log("20 random id: "+ randomCharacters(2))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function combo(arr) {
    let arraY =  new Array(1 << arr.length).fill().map(
      (e1, i) => arr.filter((e2, j) => i & 1 << j));

      return arraY.filter(a => a.length >= 2)


  }
  
  console.log("21 combo array: "+ combo([1, 2, 3]))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 

function countOccur(str,letter){
let count = 0

for(let i=0; i < str.length;i++){
    if(str[i] === letter) count++
}
return count

}

console.log('22. count occurrence: '+ countOccur("microsoft.com","o"))
// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNoRepeat(str){
    // for (let i = 0; i < str.length; i++) {
    //     let char = str[i];
    //     if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) return char;
    //   }
    const newhash = {}

    for (let i = 0; i < str.length; i++) {
        newhash[str[i]] ? newhash[str[i]]++ : newhash[str[i]] = 1;
    }

    for( const c in newhash){
       if( newhash[c] === 1) return c
    }

}

console.log("23. first no repeated is: "+ firstNoRepeat('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] < inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

  console.log("24. bubble sort: "+ bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function country(arr){
    let first = arr[0]
    for(let i = 1; i < arr.length; i++){
        if ( first < arr[i]) first = arr[i]
    }

    return first
}

console.log("25. longest Country is: "+ country(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function subString(str){
    let subStr = ""
    const myHash = {}

    for(let i = 0; i < str.length; i++){
         myHash[str[i]] ? myHash[str[i]]++ : myHash[str[i]] = 1
    }

    for( const key in myHash)
    subStr += key;
    
    return subStr
   


}

console.log("26 longest subString: "+subString("abcabcbbdd") )

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longPalindrome(s){
    let len = s.length;
    while (len--) {
        for (let i=0; i<s.length-len; i++) {
            let str = s.slice(i, i+len);
            if (palindrome(str))return str;
        }   
    }   
};


console.log("27 longest palindromic: ", longPalindrome("abracadabra"))
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 


const passFunction=(cb)=> cb();

const secondFunction =()=> console.log('28: secondFunction');

passFunction( secondFunction)

// 29. Write a JavaScript function to get the function name. 
function getName(){
   return getName.name

    // arguments.callee.name
}

console.log("29. get function name: "+ getName())
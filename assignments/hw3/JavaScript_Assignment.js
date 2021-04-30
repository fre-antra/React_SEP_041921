// 1. Write a JavaScript function that reverse a number
function reverseNum(input){
    let res = [];
    let counter = 0;
    input = input.toString().split('');
  
    for (let i = input.length-1; i >= 0; i--){
        res[counter] = input[i];
        counter++;
    }

    return res.join("")
}
// console.log(reverseNum(32243));

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run
function isPalindrome(input){
    if (input == "" || input == null || input == undefined || input < 2 || typeof input !== 'string'){
        console.log("hit flag, check input");
        return false
    }

    input = input.split('');
    let p2 = input.length-1; //pointer starts at the end

    for(let p1 = 0; p1 < input.length; p1++) {

        if (input[p1] == " " ){
            p1++;
        }
        if(input[p2] == " "){
            p2--;
        }
        if(input[p1] !== input[p2]){
            // console.log("not equal");
            return false
        }

        p2--;
    }
    return true
}
// console.log(isPalindrome("race car"));

//3. Write a JavaScript function that generates all combinations of a string.
function combinationString(input){
    let res = [];
    let idx = 0;

    for (let i = 0; i< input.length; i++){

        res[idx] = input[i]; //get all the charactor 1 by 1
        idx++
        
        for(let j = i+1; j < input.length; j++){
            res[idx] =  input.slice(i,j+1);
            // console.log(res[idx]);
            idx++;
        };
    }

    return res.join(",");
}
// console.log(combinationString('dog'));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function sortLetters(input) {
    return input.split('').sort().join('');
};
// console.log(sortLetters("bvasdas"));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
function capitalizeWords(input){
    input = input.split(" ");
    let res = [];
    
    for(let elem of input){
        elem = elem[0].toUpperCase() + elem.slice(1);
        res.push(elem);
   
    }
    return res.join(" ").toString();
}
// console.log(capitalizeWords("hi this is me"));


//6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string.
function longestWord(input){
    input = input.split(" ");
    let longest = 0;
    let res = "";

    for (let elem of input) {
        if (elem.length > longest){
            longest = elem.length
            res = elem;
        }
    }
    return res;
}
// console.log(longestWord("Web Development Tutorial"));

//7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.
//Notes: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. 

function countVowels(input){
    input = input.toLowerCase();
    let count = 0;

    for(let elem of input){
        if (elem == 'a' || elem == 'e' || elem == 'i' || elem == 'o' || elem == 'u' ){
            count++;
        }
    }
    return count;

}
// console.log(countVowels("The quick brown fox"));


//8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
function isPrime(input){
    if (input <= 1) return false;

    for (let i = 2; i < input; i++){
        if (input % i ==0) return false;
    }

    return true;
}
// console.log(isPrime(6));

//9. Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined
function returnType(input){
    return typeof(input);
}
// console.log(returnType());

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(input){
    let res = [];
    for (let i = 0; i < input; i++){

        for (let j = 0; j < input; j++){
            if(i==j)    res.push(1);
            else  res.push(0);
        }
        
      res.push("---");
      
    }
    return res;
}
// console.log(identityMatrix(9));

//11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively.
function findSecondLowestHighest(input){
    let res = [];
    input = input.sort((a,b)=>a-b);

    res.push(input[1]);
    res.push(input[input.length-2])
    
    return res;

}
// console.log(findSecondLowestHighest([1,32,12,22,42,55]));

//12. Write a JavaScript function which says whether a number is perfect.

//13. Write a JavaScript function to compute the factors of a positive integer.
function factors(input){// assuming inputs are positive int
    let res = [];
    for (let i = 1; i <= input; i++){
        if(input % i == 0) res.push(i);
    }

    return res;
}
// console.log(factors(8));    
// console.log(factors(9));
// console.log(factors(17));

//14. Write a JavaScript function to convert an amount to coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1
function convertToCoins(amountToConvert,[...typeOfCoins]){
    if (amountToConvert <= 0) return "check amount to convert"
    typeOfCoins.sort((a,b) => {return b-a}); //sort in decending order

    let res = [];
    let numberOfEachCoins = []; //counter for each type of coins to be converted 


    for (let elem of typeOfCoins){ //get # of each coins
        let count = Math.floor(amountToConvert/elem);
        amountToConvert -= (count * elem);
        numberOfEachCoins.push(count);
    }

    for(let i = 0; i < typeOfCoins.length;i++){//print out each coin counts
        console.log(`${typeOfCoins[i]} cent: ${numberOfEachCoins[i]}`);
    }   

    for (let i = 0; i < numberOfEachCoins.length; i++){
        
        while(numberOfEachCoins[i] != 0){
            res.push(typeOfCoins[i]);
            numberOfEachCoins[i]--;
        }
    }

    return res;

}
// console.log(convertToCoins(1023,[1,25,2,10,5]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the resu
function exponent(b,n)
{
    let res = 1;
    for (let i = 0; i < n; i++){
            res *= b;        
    }
    
    return res;
}
// console.log(exponent(2, 4));

//16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazyd
function uniqueCharacters(input){
    let set = new Set(input);
    let res = [...set];

    return res.join("");
}
// console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
function occurrencesOfLetter(input){
    let counts = {};

    for (let elem of input) {
        if (counts[elem]) counts[elem] += 1;
        else counts[elem] = 1;
    }

    return counts
}
// console.log(occurrencesOfLetter("auhsidasdiasudh"));

// 18. Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.
function binarySearch(arr, low, high, val){
    let mid = low + (high - low) / 2;
    
    if (arr.length >= 1) {
        if (arr[mid] == val) return `found at index ${mid}`;
        if (arr[mid] > val) {
            return binarySearch(arr, low, mid - 1, val) 
        }
        else if (arr[mid] < val)
            return binarySearch(arr,mid + 1, high, val)
        }
        else return -1
    
    return -1;
}//check this carefully
// console.log(binarySearch([1,2,3,6,11,30,70], 0,6,11));

// 19. Write a JavaScript function that returns array elements larger than a number.
function largerThanVal(arr, val){
    let res = [];
    for (elem of arr){
        if (elem > val){
            res.push(elem)
        }
    }

    return res;
}
// console.log(largerThanVal([2,6,3,78,2,45,1232,35,1,3,4,5],4));

//20. Write a JavaScript function that generates a string id (specified length) of random characters
function generateId(input)
{
    let id = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < input; i++ ){  
        id += charList.charAt(Math.floor(Math.random() * charList.length));
    }

    return id;
}
// console.log(generateId(12));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.
function countOccurence(inputString,letter){

    return occurrencesOfLetter(inputString)[letter] ? occurrencesOfLetter(inputString)[letter] : 0;

}
// console.log(countOccurence('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'
function firstNonRepeatedChar(input){
    let countObj = occurrencesOfLetter(input);
    let res = "";

    for (elem in countObj){
        if (countObj[elem] == 1) {
            res = elem; 
            break;
        }
       
    }
    return res;
}
// console.log(firstNonRepeatedChar('azbacddbecz'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. Note : 
// According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4,

// 25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output : "United States of America
function longestCountryName(input){
    let res = "";
    let nameLength = 0;
    for (elem of input){
        if (elem.length > nameLength) {
            nameLength = elem.length;
            res = elem;
        }

    }
    return res;
}
// console.log(longestCountryName((["Australia", "Germany", "United States of America"])));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(input){
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
let data = ["Australia", "Germany", "United States of America"]
function functionParam(func){
    let res = func(data);

    return res;
}
// console.log(functionParam(longestCountryName));


// 29. Write a JavaScript function to get the function name.
function getFuncName(input){
    let res = [];
    if (typeof input == "function"){
        return input.name;
    }

    if (typeof input == "object"){
        
        for (elem in input){
            if (typeof input[elem] == "function"){
                res.push(input[elem].name);

            }
        }
    }

    return res.join(",");
}
// console.log(getFuncName([longestCountryName,firstNonRepeatedChar]));
// console.log(getFuncName(firstNonRepeatedChar));


// let temp = 5;
// function foo(
//     a=()=>{
//     console.log(temp);
//     }){
//     temp =10;
//     a();
// }
// foo();
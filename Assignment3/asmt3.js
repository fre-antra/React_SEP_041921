// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223;
// function reverer_a_number(n){
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(reverer_a_number(32243));

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, 
//e.g.,madam or nurses run.
// function check_Palindrome(str){
//     var re = /[^a-zA-Z0-9]+/g;
//     var cstr = str.toLowerCase().replace(re,'');
//     var len = cstr.length;

//     if(len === 0){
//         console.log('Palindrome');
//         return true;
//     }

//     for(var i = 0; i < len/2; i++){
//         // console.log('left:' + cstr[i]);
//         // console.log('right:' + cstr[len-1-i]);
//         if (cstr[i] !== cstr[len - 1 - i]){
//             console.log('Not Palindrome');
//             return false;
//         }
//     }
//     console.log('Palindrome');
//     return true;
// }

// check_Palindrome('madam');
// check_Palindrome('');
// check_Palindrome('nurses run');

//3. Write a JavaScript function that generates all combinations of a string. 
//Example string : 'dog' 
//Expected Output : d,do,dog,o,og,g 
// function substring(str){

//     const result = [];

//     for(var i = 0; i < str.length; i++){
//         for(var j = i+1; j < str.length+1; j++){
//             result.push(str.slice(i, j));
//         }
//     }
//     console.log(result);
//     return result;
// }
// substring('dog');


//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Example string : 'webmaster' 
//Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.
// function alphabet_order(str){
//     const result = str.split('').sort().join('');
//     console.log(result);
//     return result;
// }
// alphabet_order('webmaster');

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
// function uppercase(str){
//     var cstr = str.split(' ');
//     var result = [];

//     for(var i = 0; i < cstr.length; i++){
//         result.push(cstr[i].charAt(0).toUpperCase() + cstr[i].slice(1));
//     }
//     console.log(result.join(' '));
//     return result;
// }
// uppercase('the quick brown fox');

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
// function findlongest(str){
//     var array = str.split(' ');
//     var max = array[0];

//     for(var i = 1; i < array.length; i++){
//         if(max.length < array[i].length){
//             max = array[i];
//         }
//     }
//     console.log(max);
//     return max;
// }
// findlongest('Web Development Tutorial');


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
// function count_vowel(str){
//     var cstr = str.split('');
//     var vowel_list = 'aeiouAEIOU';
//     // console.log(cstr);
//     var count = 0;
//     for(var i = 0; i < cstr.length; i++){
//         if(vowel_list.indexOf(cstr[i]) != -1){
//             count += 1;
//         }
//     }
//     console.log(count);
//     return count;
// }
// count_vowel('The quick brown fox');


// 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.
// function if_prime(n){
//     if(n === 1){
//         return false;
//     }else if(n === 2){
//         console.log(n + 'Is Prime');
//         return true;
//     }else{
//         for(var i = 2; i < n; i++){
//             if(n%i === 0){
//                 console.log('not prime');
//                 return false;
//             }
//         }
//     }
//     console.log(n + 'Is Prime');
//     return true;
// }
// if_prime(9);
// if_prime(37);


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// function return_type(n){
//     console.log(typeof n);
// }

// return_type(12);
// return_type("web");
// return_type(false);


//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
// const matrix = n =>{
//     const result = [];

//     for(let i = 0; i < n; i++){
//         result[i] = new Array(n).fill(3);
//     }

//     for(let i = 0; i < n; i++){
//         result[i][i] = 1;
//     }

//     return result;
// }

// console.log(matrix(3));


//11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4
// const findSecond = arr =>{
//     arr.sort((a,b) => a - b);
//     return [arr[1], arr[arr.length-2]];
// }
// console.log(findSecond([1,2,3,4,5]));


//12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia : In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).
//Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496 and 8128.

// const perfect_number = n => {
//     var sum = 0;

//     for(let i = 1; i <= n/2; i++){
//         if(n%i === 0){
//             sum = sum + i;
//         }
//     }
//     if(sum === n){
//         console.log('is perfect');
//         // return true;
//     }else{
//         console.log('is not perfect');
//         // return false;
//     }
        
// }
// perfect_number(6);
// console.log(perfect_number(7));


//13. Write a JavaScript function to compute the factors of a positive integer. 
// function factors(n){
//     const arr = [];
//     for(let i = 1; i <= n; i++){
//         if(n%i === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(factors(6));


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

// const amountTocoins = (amount, coins) => {
//     // const result = [];
//     coins.sort((a,b) => b-a);
//     if(amount === 0){
//         return [];
//     }

//     if(amount >= coins[0]){
//         left = (amount - coins[0]);
//         return [coins[0]].concat(amountTocoins(left, coins));
//     }else{
//         coins.shift();
//         return amountTocoins(amount, coins);
//     }
// }
// console.log(amountTocoins(46, [10, 2, 5, 1, 25]));



















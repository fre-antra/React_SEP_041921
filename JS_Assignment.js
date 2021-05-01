/****
Author: Amber
Javascript assignment
****/

//1. Write a JavaScript function that reverse a number.
//(I tried to practice arrow functions in some questions.)
const a = 32243;
const reverseFn = (a) => parseInt(String(a).split("").reverse().join(""));
console.log(reverseFn(a));


//2. Write a JavaScript function that checks whether a passed string is palindrome
const b1 = "madam";
const b2 = "nurses run";

const palindromeCheck = (b) => 
    b == b.split("").reverse().join("");
console.log(palindromeCheck(b1));
console.log(palindromeCheck(b2));


//3. Write a JavaScript function that generates all combinations of a string
const c = "dog";
const Combinations = (c) =>{
    const output = [];
    for (let x = 0; x < c.length; x++) {
        for(let y = x+1; y < c.length+1; y++) {
            output.push(c.slice(x, y));
        }
    }
    return output;
}
 console.log(Combinations(c));


//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
const d = "webmaster";
const alphabetOrder = (d) =>(
    d.split("").sort().join("")
);
console.log(alphabetOrder(d));


//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
const e = "the quick brown fox";
const upper = (e) =>{
    let output = e.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    return output;
};
console.log(upper(e));


//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
const f = "Web Development Tutorial";
const longest = (f) =>{
    const temp = f.split(" ");
    let long = "";
    for(let i = 0; i < temp.length; i++){
        if(temp[i].length > long.length){
            long = temp[i];
        }
    }
   return long;
}
console.log(longest(f));


//7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. (we do not count 'y' asvowel here.)
const g = "The quick brown fox";
const vowelCount = (g) =>
      (g.match(/[aeiou]/gi) || []).length;

console.log(vowelCount(g));


//8.Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
const h1 = 17;
const h2 = 18;

const isPrime = (h) => {
    if (h == 1) {return true;}
    for(let i = 2; i <= Math.sqrt(h); i++){
        if( h % i == 0) {
             return false;
        }
    }
    return true;
}   
console.log(isPrime(h1));
console.log(isPrime(h2));


//9. Write a JavaScript function which accepts an argument and returns the type.
//possibilites: object, boolean, function, number, string, and undefined.
const i1 = {};
const i2 = true;
const i3 = function(){};
const i4 = 1;
const i5 = "1";
const i6 = undefined;

const testType = (i) => {
    console.log(typeof i);
}
testType(i1);
testType(i2);
testType(i3);
testType(i4);
testType(i5);
testType(i6);


//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
//(Tried to practice this symtax and methods by following intructions from other resourses)
const Matrix = (n) => [...Array(n)].map((a, b, c) => c.map(a => +!b--));
console.log(Matrix(3));


//11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
const j = [1,2,3,4,5];
const seconds = (j) =>{
    let secLowest = j.sort((a, b) => { b - a; })[1];
    let secLargest = j.sort((a, b) => { b - a; })[j.length-2];
    return secLowest + ", " +secLargest;
}
console.log(seconds(j));


//12. Write a JavaScript function which says whether a number is perfect.
//(Tried to learn methods by following intructions from other resourses)
const k = 28;
const isPerfect = (k = 1) => {
   if(k === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(k)); i++){
      if(k % i === 0) {
         sum = sum + i + k / i; if(sum > k) {
            return false;
         }
      };
   };
   if (sum === k){
    console.log(k + " is perfect.");
   }
};

isPerfect(k);


//13. Write a JavaScript function to compute the factors of a positive integer. 
const factors = (l) => 
    [...Array(l + 1).keys()]
    .filter(i => l % i === 0);

console.log(factors(13));
console.log(factors(15));


//14. Write a JavaScript function to convert an amount to coins. 
//(Tried to learn methods by following intructions from other resourses)
function amountTocoins(amt, coins) {
 if (amt === 0)  {
     return [];
   } else{
     if (amt >= coins[0]) {
        let n = (amt - coins[0]);
        return [coins[0]].concat( amountTocoins(n, coins) );
        } else{
         coins.shift();
         return amountTocoins(amt, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));



//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases.
const exponentBase = (b,n) => {
    return b ** n;
}
console.log(exponentBase(2,4));


//16. Write a JavaScript function to extract unique characters from a string. 
const m = "thequickbrownfoxjumpsoverthelazydog";
//(Explored a efficient method that is found online)
const Unique = (m) => {
    return String.prototype.concat(...new Set(m));
}
console.log(Unique(m));


//17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring
const n ="abbbcccccd";
const occurrences = (n) => {
    return n.split("").reduce((out, i) => {
        let tmp = out[i];
        if (tmp) { 
            tmp = tmp + 1; 
        } else {
            tmp = 1;
        }        
        out[i] = tmp;
        return out;
      }, {});
    }
console.log(occurrences(n));


//18. Write a function for searching JavaScript arrays with a binary search. 
//(Tried to improve performance by following intructions from other resourses)
const o = [1,2,3,6,5,8,4,10];
const binarySearch = (arr, n) => {
    let l = 0
    let r = arr.length - 1
  
    while (l <= r) {
      const m = Math.floor((l + r) / 2)
      const tmp = arr[m]
  
      if (tmp === n) {
        return m;
      }
  
      if (tmp > n) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
    return null;
  }
  console.log("position by binary search: "+ binarySearch(o,8));


//19. Write a JavaScript function that returns array elements larger than a number. 
const p = [1, 15, 2, 100, 30];
const givenNum = 13;
function Larger(p) {
    return function(element, index, array) {
      return (element >= p);
    }
  }
  let largerNum = p.filter(Larger(givenNum));
console.log(largerNum);


//20. Write a JavaScript function that generates a string id (specified length) of random characters.
const idGenerates = (q) => {
    let id = Math.random().toString(36).substring(2,q+2);
    return id;
}
console.log(idGenerates(10));


//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array
//(Tried to practice this syntax and methods by following an intruction from other resourses)
const r = [1, 2, 3];
const givenLen = 2;
function subsets(r) {
    return new Array(1 << r.length).fill().map(
      (a, i) => r.filter((b, j) => i & 1 << j));
  }
  console.log(subsets(r).filter(n => n.length >= givenLen))


  //22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function count(s, l){
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        if (s[i] == l){
            cnt ++;
        }
    }
    return cnt;
}
console.log(count("abbcccdddde", "b"));
console.log(count("'microsoft.com", "o"));


//23. Write a JavaScript function to find the first not repeated character. 
//consulted examples from other resources
const notRepeat = function(t) {
  const tmp = t.split('');
  for (let i = 0; i < t.length; i++) {
    if (tmp.filter(function(j) { 
        return j == t[i]; 
    }).length == 1) return t[i];
  }
};
console.log(notRepeat("abacddbec"));


//24. Write a JavaScript function to apply Bubble Sort algorithm. 
//consulted examples from other resources
const u = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function bubbleSort(u){
    for(let i = 0; i < u.length; i++){
      for(let j = 0; j < ( u.length - i -1 ); j++){
        if(u[j] > u[j+1]){
          let temp = u[j];
          u[j] = u[j + 1];
          u[j+1] = temp;
        }
      }
    }
    console.log(u.reverse());
   }
bubbleSort(u);


//25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output
//(Tried to practice this syntax and reduce by following an intruction online)
const v = ["Australia", "Germany", "United States of America"];
function longCountry(input)
  {
  return input.reduce(function(i, ctry) 
  {
    return i.length > ctry.length ? i : ctry;
  }, "");
}
console.log(longCountry(v));


//26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters.
let longestSubstr = (r) => {
    let cnt = 0;
    let tmp = "";
    let longestSubstr = "";
    for (let i of r) {
      if (tmp.includes(i)) {
        tmp += i;
        tmp = tmp.slice(tmp.indexOf(i) + 1);
      } else {
        tmp += i;
        if (tmp.length > cnt) {
            cnt = tmp.length;
          longestSubstr = tmp;
        }
      }
    }
    return longestSubstr;
  }
console.log(longestSubstr("abccdbcbaedbdee"));


//27. Write a JavaScript function that returns the longest palindrome in a given string.
//(Tried to practice this syntax and method by following an intruction online)
let longestPalindrome = function(s) {
    let temp = [0, 1];
    for (let i=1; i< s.length; i++){
        const odd = fromCenter(s, i-1, i+1); 
        const even = fromCenter(s, i-1, i); 
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; 
        temp = temp[1] - temp[0] > longest [1] - longest[0] ?  temp : longest; 
    } 
    return s.slice(temp[0], temp[1]);
};

function fromCenter(s, l, r){
    while (l >= 0 && r < s.length){
        if(s[l] !== s[r]) break;
        l--;
        r++;
    }
    return[l + 1, r] 
}

console.log(longestPalindrome("abracadabra"));
console.log(longestPalindrome("abbbbba"));


//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function passJSFunc(funcParameter) {
    funcParameter();
}
function update() {
    console.log('Hello World');
}
passJSFunc(update);


//29. Write a JavaScript function to get the function name. 
function funcName() {
    console.log(arguments.callee.name);
}

funcName();



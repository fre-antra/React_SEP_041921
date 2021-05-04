//1. Write a JavaScript function that reverse a number.
function reverse (num){
    let str = num.toString();
    let arr =str.split('');
    arr.reverse();
    let ans = arr.join('');
    return parseInt(ans);
}
//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str){
    let l = 0;
    let r = str.length-1;
    while(l<r){
        if(str.charAt(l) !== str.charAt(r)){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
//3. Write a JavaScript function that generates all combinations of a string.
function genConbine(str){
    let ans = [];
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length+1; j++){
            ans.push(str.slice(i,j));
        }
    }
    return ans;
}
//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortAlph(str){
    let arr = str.split('');
    arr.sort();
    return arr.join('');
}
//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function toUpperLetter(str){
    let arr = str.split(' ');
    let ans = [];
    for(const word of arr){
        let c = word.charAt(0).toUpperCase();
        ans.push(c + word.slice(1));
    }
    return ans.join(' ');
}
//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongest(str){
    let arr = str.split(' ');
    let ans = '';
    for(const word of arr){
        if(word.length > ans.length){
            ans = word;
        }
    }
    return ans;
}
//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(str){
    const arr = ['a', 'e', 'i', 'o', 'u'];
    let ans = 0;
    for(let i = 0; i < str.length; i++){
        if(arr.includes(str.charAt(i))){
            ans++;
        }
    }
    return ans;
}
//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
//     Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(obj){
    return typeof obj;
}

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function getIN(n){
    const ans = [];
    for (let i = 0; i < n; i++) {
        ans[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < n; i++) {
        ans[i][i] = 1;
    }
    return res;
}
//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function getSecond(arr){
    arr.sort();
    const min = arr[1];
    const max = arr[arr.length-2];
    return [min,max];
}
// console.log(getSecond([1,2,3,4,5]));

//12. Write a JavaScript function which says whether a number is perfect.
function isPerfect(num){
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num%i === 0){
            sum += i;
        }
    }
    if(sum === num){
        return true;
    }else{
        return false;
    }
}
// console.log(isPerfect(6));
// console.log(isPerfect(496));
// console.log(isPerfect(7));

//13. Write a JavaScript function to compute the factors of a positive integer.
function getFactors(num){
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num % i ===0){
            arr.push(i);
        }
    }
    return arr;
}

//14. Write a JavaScript function to convert an amount to coins.
function getCoins(amount, coins){
    coins.sort((a,b)=>b-a);
    const ans = [];
    for (let i = 0; i < coins.length; i++) {
        if (amount < coins[i]){
            continue;
        }
        const count = Math.floor(amount / coins[i]);
        for (let j = 0; j < count; j++){
            ans.push(coins[i]);
        }
        amount = amount % coins[i];
        if (amount === 0) break;
    }
    return ans;

}

// console.log(getCoins(46,[25,10,5,2,1]));

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function getBn(b,n){
    let ans = 1;
    while(n > 0){
        ans *= b;
        n--;
    }
    return ans;
}
// console.log(getBn(2,3));

//16. Write a JavaScript function to extract unique characters from a string.
function getUnique(str){
    const set = new Set();
    for(const char of str){
        set.add(char);
    }
    let ans = '';
    for(const s of set.values()){
        ans += s;
    }
    return ans;
}
// console.log(getUnique("thequickbrownfoxjumpsoverthelazydog"));

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string
function getOccurence(str){
    const map = new Map();
    for(const char of str){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }
        else{
            map.set(char,1);
        }
    }
    const ans = [];
    for(const n of map.values()){
        ans.push(n);
    }
    return ans;
}
// console.log(getOccurence("iiissooie"));

//18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, num){
    arr.sort();
    let l = 0;
    let r = arr.length-1;
    while (l<r){
        const mid = l + Math.floor((r-l)/2);
        if(arr[mid] < num){
            l = mid + 1;
        }else if(arr[mid] > num){
            r = mid -1;
        }else{
            return true;
        }
    }
    if(arr[r] === num || arr[l] === num){
        return true;
    }
    return false;
}
// console.log(binarySearch([2,5,3,6,4], 4));
// console.log(binarySearch([2,5,3,6,4], 9));

//19. Write a JavaScript function that returns array elements larger than a number.
function getLargerNum(arr, num){
    const ans = [];
    for(const n of arr){
        if(n > num){
            ans.push(n);
        }
    }
    return ans;
}
// console.log(getLargerNum([3,2,5,3,6],4));

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
function genId(len){
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans = '';
    for(let i = 0; i < len; i++){
        const random = Math.floor(Math.random() * str.length);
        ans += str.charAt(random);
    }
    return ans;
}
// console.log(genId(7));

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function getSubset(arr, len){
    const ans = [];
    const sub = [];
    arr.sort();
    helper(sub, 0, ans);
    function helper(sub,start,ans){
        if(sub.length === len){
            ans.push([...sub]);
            return;
        }
        for(let i = start; i < arr.length; i++){
            if(arr[i+1] && arr[i] === arr[i+1]) continue;
            sub.push(arr[i]);
            helper(sub,i+1,ans);
            sub.pop();
        }
    }
    return ans;
}
// console.log(getSubset([1,2,3] ,2));

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function getNumOfOccur(str, letter){
    let ans = 0;
    for(const char of str){
        if(char === letter){
            ans++;
        }
    }
    return ans;
}
// console.log(getNumOfOccur('microsoft.com','o'));

//23. Write a JavaScript function to find the first not repeated character.
function findUnique(str){
    const map = new Map();
    for(const char of str){
      if(map.has(char)){
          map.set(char,2);
      }else{
          map.set(char,1);
      }
    }
    for(const key of map.keys()){
        if(map.get(key) === 1){
            return key;
        }
    }
}
// console.log(findUnique('abaciddbec' ));

//24. Write a JavaScript function to apply Bubble Sort algorithm
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        let cur = 0;
        while(cur < arr.length -i -1){
            if(arr[cur] < arr[cur+1]){
               const temp = arr[cur];
               arr[cur] = arr[cur+1];
               arr[cur+1] = temp;
            }else{
                cur = cur+1;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function getLargerName(arr){
    let max = 0;
    let ans;
    for(const country of arr){
        if(country.length > max){
            ans = country;
            max = country.length;
        }
    }
    return ans;
}
// console.log(getLargerName(["Australia", "Germany", "United States of America"]));

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findSubString(str){
    const n = str.length;
    let res = 0;
    let pos = 0;
    const lastIndex = new Array(256).fill(-1);
    let i =0;
    for(let j = 0; j < n; j++){
        i = Math.max(i, lastIndex[str.charAt(j).charCodeAt(0)] + 1);
        if(j-i+1 > res){
            res = j-i+1;
            pos = i;
        }

        lastIndex[str.charAt(j).charCodeAt(0)] = j;
    }
    return str.slice(pos, pos+res);
}
// console.log(findSubString("soixoadsozapw"));

//27. Write a JavaScript function that returns the longest palindrome in a given string.
function getLP(str){
    const n = str.length;
    let res = 1;
    let start = 0;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            let flag = 1;
            for(let k = 0; k < Math.floor((j-i+1)/2); k++){
                if(str.charAt(i+k) !== str.charAt(j-k)){
                    flag = 0;
                }
            }
            if(flag !== 0 && (j-i+1) > res){
                start = i;
                res = j-i+1;
            }
        }
    }
    return str.slice(start, start + res);
}
// console.log(getLP("iosabccbaiso"));
//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFunc(cb){
    return cb(1);
}
// console.log(passFunc((num)=>num+1));

//29. Write a JavaScript function to get the function name.
function getFuncName(fn){
    return fn.name;
}
// console.log(getFuncName(passFunc));
/*1. Reverse a number*/
function reverseNum(num) {
    return parseFloat(
        num
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(num);
}

console.log(reverseNum(12345));
console.log(reverseNum(-12345));

/*2. Check palindrome*/
function checkPalidrome(str) {
    let lo = 0, hi = str.length - 1;
    while(lo < hi) {
        if(str[lo] !== str[hi])
            return false;
        lo++;
        hi--;  
    }
    return true;
}

console.log(checkPalidrome('abcba'));
console.log(checkPalidrome('hello'));

/*3. All combinations of a string*/
const allCombination = str => {
    const result = [];
    let high = 1;
    while(high <= str.length) {
        let start = 0;
        while(start < str.length) {
            result.push(str.substring(start, start + high));
            start++;
        }
        high++;
    }
    return result;
};

console.log(allCombination('dog'));

/*4. Sorting string*/
const sortStr = str => {
    return str
                .split('')
                .sort()
                .join('')
};

console.log(sortStr("dcba"));

/*5. Convert first letter of each word in upper letter.*/
const convertFirstUpper = str => {
    let arr = str.split(' ');
    let result = []
    for(let ele of arr) {
        result.push(ele[0].toUpperCase() + ele.slice(1));
    }
    return result.join(' ');
};

console.log(convertFirstUpper('the quick brown fox'));

/*6. Find the longest word whithin the string*/
const findLongestWord = str => {
    let arr = str.split(' ');
    let result = '';
    let maxLength = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > maxLength) {
            result = arr[i];
            maxLength = arr[i].length;
        }
    }
    return result;
};

console.log(findLongestWord('Web Development Tutorial'));

/*7. Count Vowels*/
const countVowels = str => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.has(str[i])) {
            result++;
        }
    }
    return result;
};

console.log(countVowels('The quick brown fox'));

/*8. Check Prime Number*/
const checkPrime = num => {
    if(num < 3) {
        return num === 2;
    }
    if(num % 2 === 0) {
        return false;
    }
    for(let i = 3; i < num; i += 2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(checkPrime(4)); //should be false
console.log(checkPrime(19)); //should be true

/*9. Return Type*/
const checkType = arg => {
    return typeof arg;
}

console.log(checkType('123')); //should be string
console.log(checkType(123)); //should be number

/*10. n rows by n columns identity matrix*/
const nBynMatrix = n => {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0);
        arr[i][i] = 1;
    }
    return arr;
};

console.log(nBynMatrix(3));

/*11. Find the second lowest and second greatest numbers in an array*/
const findSecondNum = arr => {
    if(arr.length < 3) {
        return [];
    }
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

console.log(findSecondNum([3,2,1,5,4]));

/*12. Perfect Number*/
const isPerfect = num => {
    let sum = 0;
    for(let i = 1; i < num; i++) {
        if(num%i === 0) {
            sum += i;
        }
    }
    return sum === num;
};

console.log(isPerfect(8128));

/*13. Factors of positive integer*/
const findFactors = num => {
    const res = [];
    for(let i = 1; i <= num; i++) {
        if(num%i === 0) {
            res.push(i);
        }
    }
    return res;
};

console.log(findFactors(66));

/*14. Amount to coins*/
const amountToCoins = (target, coins) => {
    const res = [];
    coins.sort((a,b) => b-a);
    let currIdx = 0;
    while(target != 0) {
        if(target - coins[currIdx] < 0) {
            currIdx++;
        }
        else {
            res.push(coins[currIdx]);
            target -= coins[currIdx];
        }
    }
    return res;
};

console.log(amountToCoins(46, [1, 2, 5, 10, 25]));

/*15. Compute power n of b*/
const powerN = (b, n) => {
    return b**n;
};

console.log(powerN(4,2));

/*16. Extract unique characters from a string*/
const uniqueChars = str => {
    let res = new Set();
    for(let i = 0; i < str.length; i++) {
        res.add(str[i]);
    }
    return [...res].join('');
};

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'));

/*17. Get the number of occurrences of each letter in specified string*/
const countOccur = str => {
    let map = new Map(); 
    
    for(let i = 0; i < str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], 0);
        }
        map.set(str[i], map.get(str[i]) + 1);
        
    }
    return [...map]
};

console.log(countOccur("show me the money again, show them again, and again"));

/*18. Binary Search*/
const binarySearch = (arr, target) => {
    arr.sort((a,b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left+right) / 2);
        if(target == arr[mid]) {
            return true;
        }
        else if(target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
};

console.log(binarySearch([2,5,8,1,12,14,16,6], 6));

/*19. Return array elements larger than a number*/
const largerThanTarget = (arr, target) => {
    let res = [];
    arr.forEach(num => {
        if(num > target) {
            res.push(num);
        }
    });
    return res;
};

console.log(largerThanTarget([2, 5, 6, 8, 1, 12, 14, 16], 5));

/*20. Generates a string id of random characters*/
const randomId = len => {
    const characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res ='';
    while(res.length < len) {
        res += characterList[Math.floor(characterList.length * Math.random())];
    }
    return res;
};

console.log(randomId(10));

/*21. */
function subset(arr, len) {
    const res = [];
    const subArr = [];
    if (!arr.length || len < 1) return null;
    arr.sort((a, b) => a - b);
    helper(subArr, 0, res);
    function helper(subArr, start, res) {
        if (subArr.length === len) {
            res.push([...subArr]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if (arr[i + 1] && arr[i] === arr[i + 1]) continue;
            subArr.push(arr[i]);
            helper(subArr, i + 1, res);
            subArr.pop();
        }
    }
    return res;
};

console.log(subset([1, 2, 3], 2))

/*22. Count Occurrences of the specified letter*/
const countOccurOfLetter = (str, letter) => {
    let count = 0;
    for(let ele of str) {
        if(ele === letter) {
            count++;
        }
    }
    return count;
};

console.log(countOccurOfLetter('microsoft.com', 'o'));

/*23. Find the first not repeated character*/
const findFirstNonRepeat = str => {
    let map = new Map();
    for(let ele of str) {
        if(!map.has(ele)) {
            map.set(ele, 1);
        } else {
            map.set(ele, map.get(ele) + 1);
        }
    }
    for(let key of map.keys()) {
        if(map.get(key) === 1) {
            return key;    
        }
    }
    return '';
};

console.log(findFirstNonRepeat('abacddbec'));

/*24. Bubble Sort*/
const bubbleSort = arr => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/*25. Find the longest country name*/
const longestCountry = arr => {
    let maxLen = 0;
    let res = '';
    for(let ele of arr) {
        if(ele.length > maxLen) {
            maxLen = ele.length;
            res = ele;
        }
    }
    return res;
};

console.log(longestCountry(["Australia", "Germany", "United States of America"]));

/*26. Find the longest substring without repeat characters*/
const findLongestSubstring = str => {
    let longest = '';
    let maxLen = 0;
    let start = 0;
    let len = str.length;
    while(start < len) {
        let set = new Set();
        let end = start;
        while(end < len) {
            if(!set.has(str[end])) {
                set.add(str[end]);
                end++;
            } else {
                let sub = str.substring(start, end);
                if(sub.length > maxLen) {
                    maxLen = sub.length;
                    longest = sub;
                }
                break;
            }
        }
        start++;
    }
    return [maxLen, longest];
};

console.log(findLongestSubstring('abcdeqwedadefghijklmnopqfassd'));

/*27. Write a JavaScript function that returns the longest palindrome in a given string */
const longestPalindrome = function (s) {
    if (!s) return '';
    const res = [];
    const isPalindrome = function (i, j, s) {
        const a = s.slice(i, j + 1);
        let [x, y] = [0, a.length - 1];
        while (x <= y) {
            if (a[x] !== a[y]) return false;
            x++;
            y--;
        }
        return true;
    }
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1;
        while (i <= j) {
            if (j - i < max) break;

            if (s[j] === s[i] && isPalindrome(i, j, s)) {
                const a = s.slice(i, j + 1);
                max = Math.max(max, a.length);
                res.push(s.slice(i, j + 1));
                break;
            }
            j--;
        }
    }
    //console.log(res);
    res.sort((a, b) => b.length - a.length);
    return res[0];
};
const str = "alabama";
console.log(longestPalindrome(str));

/*28. Write a JavaScript program to pass a 'JavaScript function' as parameter*/
const passAFunction = (callbackFn, num) => {
    return callbackFn(num);
};

const computeFactorial = num => {
    let res = 1;
    while(num > 0) {
        res *= num;
        num--;
    }
    return res;
};

console.log(passAFunction(computeFactorial, 10));

/*29. Get the function name*/
const getFnName = fun => {
    return fun.name;
};

console.log(getFnName(function a(){}));
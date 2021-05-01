// Question 1 - Convert the string into a string, if it is num
function reverseNumber(numString){
    numString = `${numString}`;

    return numString.split('').reverse().join('');
}

console.log(`Question 1: ${reverseNumber('34223')}`);

// Question 2 -
function isPalindrome(inputString){
    let left = 0;
    let right = inputString.length - 1;

    while(left < right){
        if(inputString[left] !== inputString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(`Is 'anana' a palindrome? (true): ${isPalindrome('anana')}`);
console.log(`Is 'banana' a palindrome? (false): ${isPalindrome('anana')}`);

// Question 3 -
function allStringPermutations(inputString){
    let permArray = [];
    let stringArray = inputString.split('');

    for(let i = 0; i < stringArray.length; i++){
        for(let j = i; j < stringArray.length; j++){
            permArray.push(stringArray.slice(i, j + 1).join(''));
        }
    }
    return permArray;
}

console.log(`Combinations of 'dog' are ${allStringPermutations("dog")}`);

// Question 4 - NOT CORRECT WITH CAPITAL LETTER MIXED IN
function stringSort(inputString){
    let stringArray = inputString.split('');
    return stringArray.sort().join('');
}

console.log(`webmaster alphabetically arranged is ${stringSort('webmaster')}`)

// Question 5 -
function capitalizeFirst(inputString){
    let wordArray = inputString.split(' ');
    let newArray = [];

    for(let word of wordArray){
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return newArray.join(' ');
}

console.log(capitalizeFirst('the quick brown fox'));

// Question 6 -
function longestWord(inputString){
    let wordArray = inputString.split(' ');
    let biggestWordIndex = 0;

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > wordArray[biggestWordIndex].length){
            biggestWordIndex = i;
        }
    }

    return wordArray[biggestWordIndex];
}

console.log(longestWord('Web Development Tutorial'));

// Question 7 -
function countVowel(inputString){
    let charArray = inputString.toLowerCase().split('');
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let c of charArray){
        if(vowels.includes(c)){
            vowelCount += 1;
        }
    }

    return vowelCount;
}

console.log(countVowel('The quick brown fox'));

// Question 8
function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2; i < num; i++)
        if(num % i === 0){
            return false;
        }
    return true;
}

console.log(isPrime(11));

// Question 9
function isType(arg){
    return typeof arg;
}

console.log(isType('a'));
console.log(isType(12));

// Question 10
function identityMatrix(n){
    let matrix = [];

    for(let i = 0; i < n; i++){
        let row = [];
        for(let j = 0; j < n; j++){
            if(j === i){
                row.push(1);
            } else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(identityMatrix(3));

// Question 11
function secondLowestGreatest(numArray){
    let newArray = numArray.sort(((a, b) => (a - b)));

    return [newArray[1], newArray[newArray.length - 2]];
}

console.log(secondLowestGreatest([3, 1, 2, 4, 5]));

// Question 12
function isPerfectNumber(num){
    let divisors = [];

    for(let i = 0; i < num; i++){
        if(num % i === 0){
            divisors.push(i);
        }
    }

    let sum = divisors.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })

    return num === sum && ((num + sum) / 2 === sum);

}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(7));

// Question 13
function factors(num){
    let factors = [];

    for(let i = 0; i < num; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }

    return factors;
}

console.log(factors(6));

// Question 14 - Since we change into largest coin first, reverse sort the coins array, which may not be in order
function amountToCoins(amt, coins){
    let sortedCoins = coins.sort((a, b) => (a - b)).reverse();
    let coinsArray = [];

    for(let coin of sortedCoins){
        while(amt / coin >= 1){
            amt -= coin;
            coinsArray.push(coin);
        }
    }
    return coinsArray;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// Question 15
function exponent(b, n){
    return Math.pow(b, n);
}

console.log(exponent(2, 4));

// Question 16
function uniqueChar(inputString){
    let stringArray = [];

    for(let c of inputString){
        if(stringArray.includes(c)){
        } else{
            stringArray.push(c);
        }
    }

    return stringArray.join('');
}

console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));

// Question 17
const countChar = (char, string) => string.split('').filter(c => c === char).length;

console.log(countChar('e', 'applee'));

// Question 18 - Assume Array is sorted
function binarySearch(ele, array){
    let left = 0;
    let right = array.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        if(array[mid] === ele){
            return true;
        } else if (array[mid] < ele){
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return false;
}

console.log(binarySearch(1, [1, 2, 3, 4, 5]));

// Question 19 - Return element larger than a number
function largerThanNumber(n, arr){
    let larger = [];

    for(let ele of arr){
        if(ele > n){
            larger.push(ele);
        }
    }
    return larger;
}

console.log(largerThanNumber(2, [1, 2, 3, 4, 5]));

// Question 20 -
function randomString(n){
    let validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let newStringID = [];

    for(let i = 0; i < n; i++){
        let validID = Math.floor(Math.random() * validChars.length);
        newStringID.push(validChars[validID]);
    }
    return newStringID.join('');
}

console.log(randomString(10));

// Question 21
function getSubSets(array, n){
    let set_size = Math.pow(2, n);
    let subSets = [];


    for(let i = 0; i < set_size; i++){
        let subSet = [];
        for(let j = 0; j < set_size; j++){
            if((i & (1 << j)) > 0){
                subSet.push(array[j]);
            }
        }
        if(subSet.length){
            subSets.push(subSet);
        }
    }
    return subSets;
}

console.log(getSubSets(['a', 'b', 'c'], 3));

// Question 22 - Same as 17

// Question 23 - Logically, a set should be used for this

function firstNotRepeated(string){
    const uniques = new Set();
    const repeated = new Set();
    const charArray = string.split('');

    for(let c of charArray){
        if(uniques.has(c) || repeated.has(c)){
            uniques.delete(c);
            repeated.add(c);
        } else {
            uniques.add(c);
        }
    }

    return uniques.values().next().value;
}

console.log(firstNotRepeated('abacddbec'));

// Question 24
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < (array.length - i - 1); j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
}

// Question 25
function longestCountry(array){
    let longestIndex = 0;

    for(let i = 0; i < array.length; i++){
        if(array[longestIndex].length < array[i].length){
            longestIndex = i;
        }
    }

    return array[longestIndex];
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]));

// Question 26
function longestNoRepeat(substring){
    const n = substring.length;




    function isRepeated(string){
        const mySet = new Set();

        for(let e of string){
            if(mySet.has(e)){
                return true;
            } else {
                mySet.add(e);
            }
        }
        return false;
    }
}

// Question 27


// Question 28 & 29
function takeInFunction(fn){
    return fn.name;
}

console.log(function test(){return 1});

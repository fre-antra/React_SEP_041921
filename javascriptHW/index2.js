// 11. Write a JavaScript function which will take an array of numbers stored and find
// the secondlowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const findSecondHL = (arr) => {
  let fHigh = -Infinity;
  let sHigh = -Infinity;
  let fLow = Infinity;
  let sLow = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr > fHigh) {
      sHigh = fHigh;
      fHigh = curr;
    } else if (curr > sHigh) {
      sHigh = curr
    }

    if (curr < fLow) {
      sLow = fLow
      fLow = curr
    } else if (curr < sLow) {
      sLow = curr
    }
  }

  return [sLow, sHigh]
};

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that 
// is equal tothe sum of its proper positive divisors, that is, the sum of its positive 
// divisors excluding the number itself (also known as its aliquot sum). 
// Equivalently, a perfect number is a number that ishalf the sum of all of its positive 
// divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive 
// divisors, and1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive 
// divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed bythe perfect numbers 496 and 8128.

const isPerfect = n => {
  let divisors = [];
  let limit = n/2;
  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) divisors.push(i)
  }
  return (divisors.reduce((acc, cur) => (acc + cur), 0) === n)
}

//13. Write a JavaScript function to compute the factors of a positive integer. 

const allFactors = n => {
  let ans = [];
  let limit = n/2
  for(let i = 0; i <= limit; i++) {
    if (n%i === 0) ans.push(i)
  }
  return ans;
}

//14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

const amountToCoins = (amount, coins) => {
  coins.sort((a, b) => b-a);
  let ans = [];
  let i = 0;
  let currCoin = coins[i]
  while (amount > 0) {
    if (amount < currCoin) {
      currCoin = coins[++i];
    } else {
      amount -= currCoin;
      ans.push(currCoin)
    }
  }
  return ans
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent 
// and b is the base. 
// Accept b and n from the user and display the result.

const exp = (b, n) => {
  return b**n
}


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

const extractUniqueChar = s => {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return Array.from(set).join('')
}

// 17. Write a JavaScript function to get the number of occurrences of each letter 
// in specified string.

const countLetters = s => {
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') continue
    (counter[s[i]] == undefined) ? counter[s[i]] = 1 : counter[s[i]] = counter[s[i]] + 1;
  }
  return counter;
}

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller 
// chunks until it findsthe desired value.

const binarySearch = (arr, target) => {
  arr.sort((a,b) => a - b);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low;
    let cur = arr[mid];
    if (cur === target) {
      return true
    } else if (cur < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}

//19. Write a JavaScript function that returns array elements larger than a number.

const filterLarger = (arr, n) => {
  return arr.filter(i => i > n)
}


//20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateId = len => {
  let ans = '';
  for (let i = 0; i < len; i++) {
    ans += String.fromCharCode(Math.random() * 93 + 33);
  }
  return ans;
}

console.log(generateId(20));

module.exports = {
  findSecondHL,
  isPerfect,
  allFactors,
  amountToCoins,
  exp,
  extractUniqueChar,
  countLetters,
  binarySearch,
  filterLarger,
  generateId
}
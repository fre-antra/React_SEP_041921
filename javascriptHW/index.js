// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = (n) => {
  let answer = 0;
  while (n > 0) {
    answer = answer * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
};

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g.,madam or nurses run.

const isPalindrome = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const allCombination = (s) => {
  let answer = new Set();
  for (let i = 0; i < s.length; i++) {
    let index = i;
    let str = "";
    while (index < s.length) {
      str += s[index++];
      answer.add(str);
    }
  }
  return Array.from(answer);
};

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const orderString = (s) => {
  return s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
};

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

const firstLetterUpper = (s) => {
  return s
  .split(" ")
  .map(i => i[0].toUpperCase().concat(i.slice(1)))
  .join(" ")
};


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

const longestWord = (s) => {
  let ans = '';
  s.split(' ').forEach(i => ans = (ans.length < i.length) ? i : ans);
  return ans;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

const vowelCounter = s => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) ans++;
  }
  return ans;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.

const isPrime = (n) => {
  let limit = Math.sqrt(n);
  if (n%2 === 0) {
    return false
  }
  for (let i = 3; i <= limit; i+=2) {
    if (n%i === 0) return false
  }
  return true
}

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: 
// object, boolean, function, number,string, and undefined.

const typeOf = (arg) => {
  return typeof arg;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

const identityMatrix = n => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      (j === i) ? row.push(1) : row.push(0)
    }
    ans.push(row);
  }

  return ans
}

module.exports = {
  reverseNumber,
  isPalindrome,
  allCombination,
  orderString,
  firstLetterUpper,
  longestWord,
  vowelCounter,
  isPrime,
  typeOf,
  identityMatrix
};

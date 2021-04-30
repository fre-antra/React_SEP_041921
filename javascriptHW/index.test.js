const {
  firstLetterUpper,
  reverseNumber,
  isPalindrome,
  allCombination,
  orderString,
  longestWord,
  vowelCounter,
  isPrime,
  typeOf,
  identityMatrix
} = require("./index.js");

//reverseNumber
test("reverse the number 32243 to 34223", () => {
  expect(reverseNumber(32243)).toBe(34223);
});

//isPalindrome
test("check if 'madam' is palindrome", () => {
  expect(isPalindrome("madam")).toBe(true);
});
test("check if 'boat' is palindrome", () => {
  expect(isPalindrome("boat")).toBe(false);
});


//allCombination
test("check all combination of 'dog'", () => {
  let answer = allCombination("dog");
  let expected = ["d", "do", "dog", "o", "og", "g"];
  expect(answer.length).toBe(expected.length);
  expect(answer).toEqual(expect.arrayContaining(expected));
});

//orderString
test("order 'webmaster' alphabetically", () => {
  expect(orderString("webmaster")).toBe("abeemrstw");
});

//firstLetterUpper
test("change 'the quick brown fox' to 'The Quick Brown Fox'", () => {
  expect(firstLetterUpper("the quick brown fox")).toBe("The Quick Brown Fox");
});

//longestWord
test("return the longest word from 'Web Development Tutorial'", () => {
  expect(longestWord("Web Development Tutorial")).toBe("Development");
});

//vowelCounter
test("return the number of vowels from 'The quick brown fox'", () => {
  expect(vowelCounter("The quick brown fox")).toBe(5);
});

//isPrime
test("return the false for '9'", () => {
  expect(isPrime(9)).toBe(false);
});
test("return the true for '127'", () => {
  expect(isPrime(127)).toBe(true);
});

//typeOf
test("return 'number' for 22", () => {
  expect(typeOf(22)).toBe('number');
});
test("return 'string' for 'house'", () => {
  expect(typeOf('house')).toBe('string');
});
test("return 'object' for {name: 'Lucy'}", () => {
  expect(typeOf({name: 'Lucy'})).toBe('object');
});
test("return 'undefined' for undefined", () => {
  expect(typeOf(undefined)).toBe('undefined');
});
test("return 'boolean' for true", () => {
  expect(typeOf(true)).toBe('boolean');
});

//identityMatrix
test("return [[1,0,0],[0,1,0],[0,0,1]] for 3", () => {
  expect(identityMatrix(3)).toEqual([[1,0,0],[0,1,0],[0,0,1]]);
});

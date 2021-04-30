/* Part 1 - JavaScript function that reverse a number */
function reverse_num(num){
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}
  
let x = 32243;
console.log(reverse_num(x));

/* Part 2 - JavaScript function that checks whether a passed string is palindrome or not */
function palindrome(s){
    s = s.replace(/\s/g, '');
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("madam"));
console.log(palindrome("nurses run"));

/* Part 3 - JavaScript function that generates all combinations of a string */
function all_combos(s){
    var combos = new Array();
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j < s.length + 1; j++) {
            combos.push(s.slice(i, j));
        }
    }
    return combos;
}

console.log(all_combos("dog"));

/* Part 4 - JavaScript function that returns a passed string with letters in alphabetical order */
function alphabetical_order(s){
    return s.split('').sort().join('');
}

console.log(alphabetical_order("webmaster"));

/* Part 5 - JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case */
function first_word_to_upper(s){
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

console.log(first_word_to_upper("the quick brown fox"));

/* Part 6 - JavaScript function that accepts a string as a parameter and find the longest word within the string */
function longest_word(s){
    s = s.split(' ');
    var word = s[0];
    for(let i = 1; i < s.length; i++){
        if(s[i].length > word.length){
            word = s[i];
        }
    }
    return word;
}

console.log(longest_word("Web Development Tutorial"));

/* Part 7 - JavaScript function that accepts a string as a parameter and counts the number of vowels within the string */
function vowel_count(s){
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let letter of s.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
  
console.log(vowel_count("The quick brown fox"));

/* Part 8 - JavaScript function that accepts a number as a parameter and check the number is prime or not */
function check_if_prime(num){
    if (num === 1){
      return false;
    }
    if (num === 2){
      return true;
    }
    for (let i = 2; i < num; i++){
      if (num % i == 0){
        return false;
      }
    }
    return true;
}
  
console.log(check_if_prime(3));
console.log(check_if_prime(21));

/* Part 9 - JavaScript function which accepts an argument and returns the type */
function type_of(arg){
    return typeof arg;
}
  
console.log(type_of(123));
console.log(type_of("Hello"));

/* Part 10 - JavaScript function which returns the n rows by n columns identity matrix */
function n_by_n(num){
    var matrix = [];
    for (let i = 0; i < num; i++){
      matrix[i] = []
      for (let j = 0; j < num; j++){
        if (i == j){
          matrix[i][j] = 1;
        }
        else{
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
}
  
console.log(n_by_n(3));

/* Part 11 - JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively */
function second_lowest_greatest(arr){
    arr = arr.sort();
    return [arr[1], arr[arr.length - 2]];
}
  
console.log(second_lowest_greatest([1,2,3,4,5]));

/* Part 12 - JavaScript function which says whether a number is perfect */
function perfect_num(num){
    if (num === 1) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if (num % i === 0) {
        sum = sum + i + num / i; 
        if (sum > num) {
          return false;
        }
      }
    }
   return sum === num;
}
  
console.log(perfect_num(496));
console.log(perfect_num(14));

/* Part 13 - JavaScript function to compute the factors of a positive integer */
function get_factors(num){
    var factors = new Array;
    for (let i = 0; i <= num; i++){
      if (num % i == 0){
        factors.push(i);
      }
    }
    return factors;
}
  
console.log(get_factors(14));

/* Part 14 - JavaScript function to convert an amount to coins */
function amount_to_coins(amount, coins){
    if (amount === 0){  
       return [];  
    }  
    else if (amount >= coins[0]){
      let left = (amount - coins[0]);
      return [coins[0]].concat(amount_to_coins(left, coins));
    } 
    else{
      coins.shift();
      return amount_to_coins(amount, coins);
    }
}
  
console.log(amount_to_coins(46, [25, 10, 5, 2, 1]));

/* Part 15 - JavaScript function to compute the value of bn where n is the exponent and b is the bases */
function power(b, n){
    var bn = 1;
    for (let i = 1; i <= n; i++){
      bn = b * bn;
    }
    return bn;
}

console.log(power(4, 3));

/* Part 16 - JavaScript function to extract unique characters from a string */
function unique_letters(s){
    return String.prototype.concat(...new Set(s));
}

console.log(unique_letters("thequickbrownfoxjumpsoverthelazydog"));

/* Part 17 - JavaScript function to  get the number of occurrences of each letter in specified string */
function letter_count(s){
    s = s.replace(/\s/g, '');
    var count = {};
    for (let i = 0; i < s.length; i++){
      const letter = s.charAt(i);
      if (count[letter]){
        count[letter] = count[letter] + 1;
      } 
      else{
        count[letter] = 1;
      }
    }
    return count;
}

console.log(letter_count("hello Matt"));

/* Part 18 - function for searching JavaScript arrays with a binary search */
function binary_search(arr, num){
    let first_pos = 0;
    let last_pos = arr.length - 1;
  
    while (first_pos <= last_pos) {
      const mid_pos = Math.floor((first_pos + last_pos) / 2);
      const val = arr[mid_pos];
      if (val === num) {
        return mid_pos;
      }
      if (val > num) {
        last_pos = mid_pos - 1;
      } else {
        first_pos = mid_pos + 1;
      }
    }
    return -1;
}

console.log(binary_search([2,5,6,8,9], 5));

/* Part 19 - JavaScript function that returns array elements larger than a number */
function larger_than_num(arr, num){
    var larger_nums = new Array;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > num){
        larger_nums.push(arr[i]);
      }
    }
    return larger_nums;
}

console.log(larger_than_num([2,3,6,7,8,9], 3));

/* Part 20 - JavaScript function that generates a string id (specified length) of random characters */
function string_id(s, len){
    var random_text = "";
    for(let i = 0; i < len; i++){
      random_text += s.charAt(Math.floor(Math.random() * s.length));
    }
    return random_text;
}

console.log(string_id("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 6));

/* Part 21 - JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array */
function get_subsets(arr, len){
    var subsets = [];
    var sets = Math.pow(2, arr.length);
    for (let i = 0; i < sets; i++) {
      var temp = [];
      var num = i.toString(2);
      while (num.length < arr.length){ 
        num = '0' + num; 
      }
      for (var b = 0; b < num.length; b++) {
        if (num[b] === '1'){
          temp.push(arr[b]); 
        }    
      }
      if (temp.length == len){
        subsets.push(temp);
      }
    }
    return subsets;
}

console.log(get_subsets([1,2,3], 2));

/* Part 22 - JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string */
function count_occurences(s, letter){
    var count = 0;
    for (let i = 0; i < s.length; i++){
      const l = s.charAt(i);
      if (l === letter){
        count += 1;
      }
    }
    return count;
}

console.log(count_occurences("microsoft.com", "o"));

/* Part 23 - JavaScript function to find the first not repeated character */
function first_not_repeated(s){
    for (let i = 0; i < s.length; i++){
      const letter = s.charAt(i);
      if (s.indexOf(letter) == i && s.indexOf(letter, i + 1) == -1) {
        return letter;
      }
    }
    return null;
}

console.log(first_not_repeated("abacddbec"));

/* Part 24 - JavaScript function to apply Bubble Sort algorithm */
function bubble_sort(arr){
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if (arr[j] < arr[j + 1]){
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
}

console.log(bubble_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/* Part 25 - JavaScript function that accept a list of country names as input and returns the longest country name as output */
function longest_country_name(arr){
    var country = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (arr[i].length > country.length){
        country = arr[i];
      }
    }
    return country;
}

console.log(longest_country_name(["Australia", "Germany", "United States of America"]));

/* Part 26 - JavaScript function to find longest substring in a given a string without repeating characters */
function longest_substring(s){
    var substring = "";
    var result = ""
    var max = 0;
    for (let i = 0; i < s.length; i++){
      const char = s.charAt(i);
      const pos = substring.indexOf(char);
      if (pos !== -1) {
        substring = substring.substr(pos + 1);
      }
      substring += char;
      if (substring.length > max){
        max = substring.length;
        result = substring;
      }
    }
    return result;
}

console.log(longest_substring("hello"));

/* Part 27 - JavaScript function that returns the longest palindrome in a given string */
function longest_palindrome(s){
    var max = 0;
    var longest_p = '';
    for(let i = 0; i < s.length; i++){
      var substring = s.substr(i, s.length);
      for(let j = substring.length; j >= 0; j--){
        var sub_substring = substring.substr(0, j);
        if (sub_substring.length <= 1)
          continue;
        if (palindrome(sub_substring)){     /* Calling palindrome function defined in Part 2 */
          if (sub_substring.length > max){
            max = sub_substring.length;
            longest_p = sub_substring;
          }
        }
      }
    }
    return longest_p;
}

console.log(longest_palindrome("bananas"))

/* Part 28 - JavaScript program to pass a 'JavaScript function' as parameter */
function call_text(id, log_text) {
    log_text();
}

function call_log_text() {
    console.log("Hello World");
}

call_text(1, call_log_text);

/* Part 29 - JavaScript function to get the function name */
function func() {
    console.log(func.name);
}

func();
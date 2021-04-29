const longestWord = (str) => {
  arr = str.split(' ');
  arr.sort((a, b) => b.length - a.length);
  return arr[0];
};

console.log(longestWord('Web Development Tutorial'))
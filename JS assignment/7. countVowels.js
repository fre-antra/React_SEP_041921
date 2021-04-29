const countVowels = (str) => {
  vowels = "aeiouAEIOU";
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (vowels.indexOf(char) >= 0) {
      cnt++;
    }
  }
  return cnt;
};

console.log(countVowels("The quick brown fox"));

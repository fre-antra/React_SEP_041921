const findLongestSubstrWithoutRepeatCharacters = (str) => {
  // two pointer
  let start = 0,
    maxLen = 0;
  let map = new Map();
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (map.get(ch) >= start) start = map.get(ch) + 1;
    map.set(ch, i);

    if (i - start + 1 > maxLen) {
      maxLen = i - start + 1;
      res = str.slice(start, i + 1);
    }
  }

  return res;
};
console.log(findLongestSubstrWithoutRepeatCharacters("abcabcbb"));
console.log(findLongestSubstrWithoutRepeatCharacters("bbbbbb"));

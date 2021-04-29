const longestPalindromeSubstr = (s) => {
  // dp
  // dp[i][j] means from index i to j is a palindrome string
  // dp[i][i]: true dp[i][i+1]: s[i] === s[i+1] s[i] === s[j] && dp[i+1][j-1]
  const len = s.length;
  const dp = Array.from(new Array(len), () => new Array(len).fill(0));
  let result = '';
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.slice(i, j + 1);
      }
    }
  }
  return result;
};
console.log(longestPalindromeSubstr("babad"));

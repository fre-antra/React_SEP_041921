function LongestPalindrome(str) {
    if (str.length === 1) {
        return str;
    }
    let ans = "";
    for (let i = 0; i < str.length - 1; i++) {
        let odd = helper(str, i, i);
        let even = helper(str, i, i+1);
        if (odd.length > ans.length) {
            ans = odd;
        }
        if (even.length > ans.length) {
            ans = even;
        }
    }
    return ans;
}
function helper(str, i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i -= 1;
        j += 1;
    }
    return str.substring(i+1, j);
}

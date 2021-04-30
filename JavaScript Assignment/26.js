function findLongestSubstring(str) {
    let output = "";
    const set= new Set();
    let i = 0;
    for (j = 0; j < str.length; j++) {
        if (!set.has(str[j])) {
            set.add(str[j]);
            if (j - i + 1 > output.length) {
                output = str.substring(i, j + 1);
            }
        } else {
            while (str[i] !== str[j]) {
                set.delete(str[i])
                i += 1
            }
            i += 1;
        }
    }
    return output;
}
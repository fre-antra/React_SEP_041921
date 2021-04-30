function countVowels(str) {
    const vowelSet = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelSet.has(str[i])) {
            count += 1;
        }
    }
    return count;
}

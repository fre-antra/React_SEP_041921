function findLongestWord(str) {
    const arr = str.split(" ");
    let longestWord;
    let longestLength = 0;
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if (word.length > longestLength) {
            longestWord = word;
            longestLength = word.length;
        }
    }
    return longestWord;
}
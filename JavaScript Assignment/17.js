function wordCount(str) {
    const map = new Map();
    let arr = str.split(" ");
    for (i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    return map;
}

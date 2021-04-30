function fingSubstring(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            arr.push(str.substring(i, j+1));
        }
    }
    return arr;
}
function extractUniqueChar(str) {
    let alphaSet = new Set([]);
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (!alphaSet.has(str[i])) {
            alphaSet.add(str[i]);
            output += str[i];
        } 
    }
    return output;
}
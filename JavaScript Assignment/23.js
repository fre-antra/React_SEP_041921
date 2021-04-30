function findFirstNonrepeatChar(str) {
    const alphaSet = new Set(), repeatSet = new Set();
    for (i = 0; i < str.length; i++) {
        if (!alphaSet.has(str[i])) {
            alphaSet.add(str[i]);
        } else {
            repeatSet.add(str[i]);
        }
    }
    for (i = 0; i < str.length; i++) {
        if (!repeatSet.has(str[i])) {
            return str[i];
        }
    }
    return null;
}
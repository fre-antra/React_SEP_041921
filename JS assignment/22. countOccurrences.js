const countOccurrences = (str, target) => {
    // thought of HashMap 
    // Also can use onepass traverse
    // They have the same time complexity
    let hashMap = {}
    let arr = str.split('')
    arr.forEach(element => {
        if (!hashMap.hasOwnProperty(element)) {
            hashMap[element] = 1
        }
        else {
            hashMap[element] += 1
        }
    });
    return hashMap[target]

}

console.log(countOccurrences('microsoft.com', 'o' ))
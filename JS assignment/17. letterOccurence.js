const letterOccurrences = (str) => {
    // thought of HashMap 
    
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
    return hashMap

}
console.log(letterOccurrences('microsoftwcom'))
function findCountryWithLongestName(arr) {
    let output;
    let longestLen = 0;
    for (let i = 0; i < arr.length; i++) {
        const country = arr[i];
        if (country.length > longestLen) {
            longestLen = country.length;
            output = country;
        }
    }
    return output;
}

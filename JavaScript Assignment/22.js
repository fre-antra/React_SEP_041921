function letterCount (str, letter) {
    let s = letter[0];
    let count = 0;
    for (let i = 0; i <= str.length - letter.length; i++) {
        if (str[i] === s) {
            if (str.substring(i, i + letter.length) === letter) {
                count += 1;
            }
        }
    }
    return count;
}
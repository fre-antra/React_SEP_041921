const nXnMatrix = (n) => {
    return Array.from({
        // generate array of length m
        length: n
        // inside map function generate array of size n
        // and fill it with `0`
      }, () => new Array(n).fill(0));
}
console.log(nXnMatrix(4));

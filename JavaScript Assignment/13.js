function findFactors(num) {
    let arr = [];
    for (let i = 1; i <= num/2; i++) {
        if(num % i === 0) {
            arr.push(i);
        }
    }
    arr.push(num);
    return arr;
}

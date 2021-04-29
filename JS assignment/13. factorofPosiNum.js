const factorofPosiNum = (num) => {
    let factor = new Set([0])
    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) {
            factor.add(i)
            factor.add(num/i)
        }
    }
    return factor
}
console.log(factorofPosiNum(4))
function reverseNumber(num) {
    
    var result = num%10;

    var temp = Math.floor(num/10);

    while(temp > 0)
    {
        result = result * 10 + temp%10;
        temp = Math.floor(temp/10);
        //console.log(temp);
    }

    return result;
}

console.log(reverseNumber(32243));
function checkPrime(num)
{
    if(num <= 1)
        return false;

    for(var i = 2; i<=9; i++)
    {
        if(num%i==0)
            return false;
    }

    return true;
}

console.log("Checking 11 if prime : " +  checkPrime(11));
console.log("Checking 10 if prime : " +  checkPrime(10));
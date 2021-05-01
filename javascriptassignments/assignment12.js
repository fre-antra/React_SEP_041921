function isPerfectNum(num)
{
    var divisorsSum = 0;
    var divisorArray = [];
    for(var i = 1; i<=Math.floor(num/2); i++)
    {
        if(num%i==0)
        {
            divisorArray.push(i);
            divisorsSum+=i;

            if(divisorsSum > num)
            {
                return false;
            }
        }

    }

    if(divisorsSum != num)
        return false;

    return true;
}

console.log(isPerfectNum(8128));
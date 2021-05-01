function toThePowerOf(x, func)
{
    return func(x);
}

function twoToThePowerOf(y)
{
    var result = 1;

    for(var i = 0; i<y; i++)
    {
        result *= 2;
    }

    return result;
}

console.log("2 to the power of 4 is " + toThePowerOf(4, twoToThePowerOf));
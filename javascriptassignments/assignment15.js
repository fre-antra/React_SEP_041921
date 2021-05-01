function baseExponent(b, n)
{
    var result = 1;
    for(var i = 1; i<=n; i++)
    {
        result *= b;
    }

    return result;
}

console.log(baseExponent(2,4));
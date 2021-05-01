function factors(n)
{
    var num_factors = [];
    var i;
 
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if (n % i === 0)
        {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    }
    
    num_factors.sort(function(x, y) { return x - y;}); 
    
    return num_factors;
}

console.log(factors(14));
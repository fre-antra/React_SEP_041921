function getOccurances(s)
{
    var result = {};

    for(var i = 0; i<s.length; i++)
    {
        if(result.hasOwnProperty(s[i]))
        {
            result[s[i]]++;
        }
        else
        {
            result[s[i]] = 1;
        }
    }

    return result;
}

console.log(getOccurances('saas'));
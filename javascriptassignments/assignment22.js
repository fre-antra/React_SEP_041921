function getOccurancesOfLetter(str, l)
{
    var count = 0;
    for(var i = 0; i<str.length; i++)
    {
        if(str[i] == l)
        {
            count++;
        }
    }

    return count;
}

console.log('The number of occurances of \'a\' in \'amanda\' is ' + getOccurancesOfLetter('amanda','a'));
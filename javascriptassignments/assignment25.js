function longestCountryName(countryNames)
{
    var max = 0;
    var index = -1;
    for(var i = 0; i<countryNames.length; i++)
    {
        if(countryNames[i].length > max)
        {
            max = countryNames[i].length;
            index = i;
        }
    }

    return countryNames[index];
}

console.log('The country with the longest name is ' + longestCountryName(["Australia", "Germany", "The United States of America"]));
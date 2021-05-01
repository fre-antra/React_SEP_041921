function firstNonRepeatedChar(str){

    var chars = {};

    for(var i = 0; i<str.length; i++)
    {
        if(chars.hasOwnProperty(str[i]))
        {
            chars[str[i]]++;
        }
        else
        {
            chars[str[i]] = 1;
        }
    }

    for(const key in chars)
    {
        if(chars[key] == 1)
            return key;
    }

    return '-1';
}

console.log(firstNonRepeatedChar('abacddbec'));
function getUniqueChars(s)
{
    var result = "";

    for(var i = 0; i<s.length; i++)
    {
        if(result.indexOf(s.charAt(i)) == -1)
        {
            result += s[i];
        }
    }

    return result;
}

console.log(getUniqueChars("thequickbrownfoxjumpsoverthelazydog"));
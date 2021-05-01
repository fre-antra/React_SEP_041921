function isVowel(letter)
{
    if(letter == 'a' || letter == 'e' || letter == 'o' || letter == 'i' || letter == 'u')
        return true;

    return false;
}

function countVowels(word)
{
    var result = 0;

    for(var i = 0; i<word.length; i++)
    {
        if(isVowel(word[i]))
            result++;
    }

    return result;
}

console.log(countVowels('The quick brown fox'));
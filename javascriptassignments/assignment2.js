function isPalindrom(word)
{
    var i = 0;

    var j = word.length - 1;

    while(i < j)
    {
        if(word[i]==word[j])
        {
            i++;
            j--;
        }
        else
            return false;
    }

    return true;


}

console.log('The function isPalindrom returns: ' + isPalindrom('madam'));


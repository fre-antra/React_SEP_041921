function longestWordInString(word)
{
    var temp = word.split(' ');

    var max = 0;
    var resultI = -1;
    for(var i = 0; i<temp.length; i++)
    {
        if(temp[i].length > max)
        {
            max = temp[i].length;
            resultI = i;
        }
    }

    return temp[resultI];
}

console.log(longestWordInString('Web Development Tutorial'));
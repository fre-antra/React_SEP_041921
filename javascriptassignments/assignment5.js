function convertFirstLetter(word)
{
    var temp = word.split(' ');
    var result = [];

    for(var i = 0; i<temp.length; i++)
    {
        var resultHelper = '';
        resultHelper += temp[i][0].toUpperCase();
        for(let j = 1; j<temp[i].length; j++)
        {
            resultHelper += temp[i][j];
        }

        result.push(resultHelper);
    }
    //console.log(temp);

    return result.join(" ");

}

console.log(convertFirstLetter('the quick brown fox'));
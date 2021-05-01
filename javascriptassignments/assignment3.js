function allCombinations(word)
{
    var result = [];

    for(var i = 0; i < word.length; i++)
    {
        let combination = '';
        for(var j = i; j< word.length; j++)
        {
            combination += word[j];
            result.push(combination);
        }
    }

    return result;
}

console.log(allCombinations('dog'));
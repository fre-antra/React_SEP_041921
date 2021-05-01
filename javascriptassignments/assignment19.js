function getLargerElements(arr, num)
{
    var result = [];

    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] > num)
        {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getLargerElements([13,14,8,3,10,4,25,31], 11));
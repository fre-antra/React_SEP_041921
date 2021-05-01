function getSeconds(arr)
{
    arr.sort();

    var result = [];
    if(arr.length > 0)
    {
        var lowest = 0;
        var greatest = arr.length -1;

        if(lowest < greatest)
        {
            lowest++;
            greatest--;
        }

        result.push(arr[lowest]);
        result.push(arr[greatest]);
    }

    return result;
}

console.log(getSeconds([1,2,3,4,5]));
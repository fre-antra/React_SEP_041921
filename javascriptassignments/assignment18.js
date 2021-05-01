function binarySearch(num, val)
{
    //num.sort((a,b) => a - b);

    var start = 0;
    var end = num.length-1;
    var mid;

    while(start <= end)
    {
        mid = Math.floor((start + end)/2);
        //console.log('mid is ' + mid);
        if(num[mid] > val)
        {
            end = mid - 1;
        }
        else if(num[mid] < val)
        {
            start = mid+1;
        }
        else
        {
            return mid;
        }
    }

    return -1;
}

console.log('the searched value is at index ' + binarySearch([1,4,5,8,10,12,14], 14));
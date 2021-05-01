function bubbleSort(arr)
{
    for(var i = 0; i<arr.length; i++)
    {
        for(var j = 0; j<arr.length-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
            }
        }
    }

    return arr;
}

console.log('Before bubble sort, the array is ' + [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
console.log('the array after bubble sort is ' + bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
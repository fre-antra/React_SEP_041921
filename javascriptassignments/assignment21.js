function subset(arr, arrSize)
 {
    var resultArr = []; 
    var result;
    
   
    for(var i = 0; i < Math.pow(2, arr.length); i++)
    {
        result = [];
        let x = arr.length - 1; 
        do
        {
            if( (i & (1 << x)) !== 0)
            {
                result.push(arr[x]);
            }
        }  while(x--);

        if( result.length >= arrSize)
        {
            resultArr.push(result);
        }
    }

    return resultArr; 
}

console.log(subset([1, 2, 3], 2));
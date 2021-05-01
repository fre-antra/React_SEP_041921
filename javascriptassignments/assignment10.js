function getIdentityMatrix(n)
{
    var matrix = [];
    for(var i=0; i<n; i++) {
        matrix[i] = [];
        for(var j=0; j<n; j++) {
            if(j==i)
            {
                matrix[i][j] = 1;
            }
            else
            {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

console.log(getIdentityMatrix(3));
function buildIdentityMatrix(n) {
    const arr = [];
    for (let i = 0; i < n; i++){
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            if (i===j) {
                arr[i].push(1);
            } else {
                arr[i].push(0)
            }
        }
    }
    return arr;
}
function secondNumOfArray(arr) {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}
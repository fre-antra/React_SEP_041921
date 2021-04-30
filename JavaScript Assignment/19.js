function findLargerNumber(num, arr) {
    arr.sort();
    let left = 0, right = arr.length - 1;
    while (left + 1 < right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] > num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    if (arr[left] > num) {
        return arr.slice(left);
    };
    return arr.slice(right);
}



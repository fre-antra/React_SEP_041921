function binarySearch(num, arr) {
    arr.sort();
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] === num) {
            return true;
        } else if (arr[mid] > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}
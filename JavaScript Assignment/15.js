function exponentCaculator(b, n) {
    let ans = 1;
    for (let i = 0; i < n; i++) {
        ans *= b;
    }
    return ans;
}

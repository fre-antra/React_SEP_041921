function getSubset(n, nums) {
	let res = []
    nums.sort().reverse();
	backtrack(0, []);
	function backtrack(index, path) {
        if (path.length === n) {
            res.push(path);
            return;
        }
		for (let i = index; i < nums.length; i++) {
			backtrack(i + 1, [...path, nums[i]]);
		}
	}
	return res;
}
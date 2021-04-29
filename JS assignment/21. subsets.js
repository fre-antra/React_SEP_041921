// recursion
const subsets = (nums, k) => {
  let res = [],
    result;

  for (let x = 0; x < Math.pow(2, nums.length); x++) {
    result = [];
    i = nums.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(nums[i]);
      }
    } while (i--);

    if (result.length >= k) {
      res.push(result);
    }
  }

  return res;
};

console.log(subsets([1, 2, 3], 2));

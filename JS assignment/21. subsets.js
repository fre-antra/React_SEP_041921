// recursion
const subsets = (nums) => {
  const result = [];
  const buildSet = (start, prev) => {
    result.push(prev);

    for (let i = start; i < nums.length; i++) {
      buildSet(i + 1, prev.concat(nums[i]));
    }
  };
  buildSet(0, []);
  return result;
};

// iteration
const subsets2 = (nums) => {
  let result = [[]];
  nums.forEach((num) => {
    const newsets = [];
    result.forEach((set) => {
      const newset = set.concat(num);
      newsets.push(newset);
    });
    result = [...result, ...newsets];
  });
  return result;
};


const subsets3 = (nums, k) => {
  const result = [];
  let n = nums.length 
  // const array = Array.from({length: n}, (val, i) => i+1)
  const helper = (start, prev)=> {
    if (prev.length === k) {
      result.push(prev);
      return;
    }

    const rest = k - prev.length;
    for (let i = start; i <= n; i++) {
      if (n - i + 1 < rest) {
        continue;
      }
      // prev.concat每次都是传递副本
      helper(i + 1, prev.concat(i));
    }
  };
  helper(1, []);
  return result;
}
console.log(subsets3([1, 2, 3], 2));

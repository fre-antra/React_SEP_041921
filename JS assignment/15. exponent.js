const exponent = (b, n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= b;
  }
  return res;
};
console.log(exponent(3, 5));

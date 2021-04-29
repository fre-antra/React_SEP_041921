const reverseNumber = (num) => {
  const isNegative = num < 0;
  const strArr = Math.abs(num).toString().split('');
  const reversStr = strArr.reverse().join('');
  const res = Number(reversStr);
  if (isNegative && res > Math.pow(2, 31)) {
    return 0;
  }
  if (!isNegative && res > Math.pow(2, 31) - 1) {
    return 0;
  }
  return isNegative ? -res : res;
};

console.log(reverseNumber(-345));

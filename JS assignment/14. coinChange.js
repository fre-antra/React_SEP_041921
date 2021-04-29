const coinChange = function (amount, coins) {
  // Greedy
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      rest = amount - coins[0];
      return [coins[0]].concat(coinChange(rest, coins));
    } else {
      coins.shift();
      return coinChange(amount, coins);
    }
  }
};

console.log(coinChange(46, [25, 10, 5, 2, 1]));

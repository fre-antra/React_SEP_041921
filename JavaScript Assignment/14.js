function amountToCoins(amount) {
    const coins = [25, 10, 5, 2, 1];
    let arr = [];
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (amount >= coin) {
            const count = parseInt(amount/coin);
            for (let i = 0; i < count; i++) {
                arr.push(coin);
            }
            amount %= coin;
        }
        
    }
    return arr;
}
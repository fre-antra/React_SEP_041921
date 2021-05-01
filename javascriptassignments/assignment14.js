function convertToCoins(num, coins)
{
    let temp = num;

    //var coins = [25, 10, 5, 2, 1];
    var checkCoin = 0;
    var result = [];

    while(temp > 0)
    {
        if(temp >= coins[checkCoin])
        {
            temp -= coins[checkCoin];
            result.push(coins[checkCoin]);
        }
        else
        {
            checkCoin++;
        }
    }

    return result;
}

var coins = [25, 10, 5, 2, 1];

console.log("Coins we get for 46 are " + convertToCoins(46, coins));


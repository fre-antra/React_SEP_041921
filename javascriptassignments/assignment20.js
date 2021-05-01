function generateStringId(n){
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var result = "";

    for(var i = 0; i<n; i++)
    {
        ranNum = Math.floor(Math.random() * txt.length);
        result += txt[ranNum];
    }

    return result;
}

console.log('The string ID generated with the length of 15 is ' + generateStringId(15));

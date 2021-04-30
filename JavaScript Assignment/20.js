function randomStr(n) {
    const str = "ABCDEFGHILKLMNOPQRSTUVWXYAabcdefghijklmnopqrstuvwxyz0123456789";
    let output = "";
    for (let i = 0; i < n; i++) {
        let idx = Math.floor(Math.random() * str.length);
        output += str[idx];
    }
    return output;
}
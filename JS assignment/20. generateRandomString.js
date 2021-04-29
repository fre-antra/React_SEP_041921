const generateRandomString = (len) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let res = []
    for (let i = 0; i < len; i++) {
        res.push(characters.charAt(Math.floor(Math.random() * len)));
    }
    return res.join('')
}
console.log(generateRandomString(40))
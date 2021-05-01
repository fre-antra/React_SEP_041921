function alphabeticOrder(word)
{
    var temp = word.split("");

    temp.sort();

    return temp.join("");
}

console.log(alphabeticOrder('webmaster'));
const generateCombination = (str) => {
  let array = [];
  for (let x = 0, y = 1; x < str.length; x++, y++) {
    array[x] = str.substring(x, y);
  }
  let combi = [];
  let temp = '';
  let slent = Math.pow(2, array.length);

  for (let i = 0; i < slent; i++) {
    temp = '';
    for (let j = 0; j < array.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += array[j];
      }
    }
    if (temp !== '') {
      combi.push(temp);
    }
  }
  return combi.join(',');
};

console.log(generateCombination('dog'))
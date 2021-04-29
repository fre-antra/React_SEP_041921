const convertFirstLetter = (str) => {
  let arr = str.split(' ');
  console.log(arr);
  arr.forEach((element, index) => {
    arr[index] =
      element.charAt(0).toUpperCase() + element.slice(1, element.lenght);
  });
  return arr.join(' ');
};

console.log(convertFirstLetter('the quick brown fox'));

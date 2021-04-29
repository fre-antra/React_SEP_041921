const secondLowestandGreatestNum = (arr) => {
  arr.sort();
  return [arr[1], arr[arr.length - 2]];
};

console.log(secondLowestandGreatestNum([1, 2, 3, 0, 4, 5]));

const extractUniqueStr = (str) => {
  res = "";
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (res.indexOf(char) === -1) {
      res += char;
    }
  }
  return res;
};

console.log(extractUniqueStr("thequickbrownfoxjumpsoverthelazydog"));

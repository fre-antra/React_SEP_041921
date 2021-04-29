const largerElement = (target) => {
  return  (evalue, index, array) => {
    return evalue >= target;
  };
};
const result = [11, 45, 4, 31, 64, 10]. filter(largerElement(10))
console.log(result)
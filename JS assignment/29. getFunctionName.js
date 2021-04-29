const getFunctionName = (fn) => {
  return fn.name;
};

// define three kind of function
const add = () => {};

function foo() {}

const func2 = function () {};

console.log(getFunctionName(add));
console.log(getFunctionName(foo));
console.log(getFunctionName(func2));

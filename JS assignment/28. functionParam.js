const functionParam = (arg, cb) => {
  cb(arg);
};

const fn1 = (arg) => {
  console.log("fn1: " + arg);
};
function fn2(arg) {
  console.log("fn2: " + arg);
}

const fn3 = function (arg) {
  console.log("fn3: " + arg);
};

console.log(functionParam("test", fn1));
console.log(functionParam("test", fn2));
console.log(functionParam("test", fn3));

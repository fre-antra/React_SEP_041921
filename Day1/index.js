// function foo() {
//   console.log(this);
// }
// foo();

// var ele = document.getElementById("root");
// console.log(ele);

var fs = require("fs");
fs.readFile("index.js", (err, data) => {
  if (err) throw err;
  console.log(data);
});

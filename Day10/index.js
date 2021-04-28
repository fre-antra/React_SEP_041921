// Async programming in JS
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 1000);
// console.log(3);
// setTimeout(function () {
//   console.log(4);
// }, 0);

//Event loop: Call stack | Taks/Event queue | Async/Browser API

// function foo() {
//   var i = 0;
//   let a = i * 1000;
//   function foo() {
//     console.log(i);
//     return function () {
//       console.log(i);
//     };
//   }
//   setTimeout(foo(), a);
//   i = 5;
// }

// foo();

// function foo() {
//   console.log("Foo");
// }

// function foo2() {
//   console.log("Foo2");
// }

function randomTimer() {
  let timer = Math.random() * 5000;
  console.log("Delayed time: ", timer);
  return timer;
}

// function callFoo2WithTimer() {
//   setTimeout(foo2, randomTimer());
// }

// function callFnWithTimer(cb) {
//   let timer = randomTimer();
//   setTimeout(cb, timer);
// }

// callFnWithTimer(() => {
//   callFnWithTimer(() => {
//     callFnWithTimer(foo2);
//   });
// });

// XML HTTP Request
//Higher-order function
// let data;
// function getUser(id, cb) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       data = JSON.parse(xhttp.responseText);
//       cb(data);
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/" + id, true);
//   xhttp.send();
// }

// getUser(1, (data1) => {
//   logMsg(data1);
//   getUser(2, (data2) => {
//     logMsg(data2);
//     getUser(3, (data3) => {
//       logMsg(data3);
//     });
//   });
// });

function logMsg(msg) {
  console.warn(msg);
}
//promise
const p = new myPromise((resolve, reject) => {
  let timer = randomTimer();
  setTimeout(() => {
    resolve("hello");
  }, timer);
})
  .then((data1) => {
    console.log("data1: ", data1);
  })
  .then((data2) => {
    console.log("data2: ", data2);
  });

class myPromise {
  constructor(cb) {
    this.resolve = function () {};
    this.reject = function () {};
    cb();
  }
}

// function getUserPromise(id) {
//   return new Promise((resolve, reject) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         data = JSON.parse(xhttp.responseText);
//         resolve(data);
//       }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/" + id, true);
//     xhttp.send();
//   });
// }
// getUserPromise(1)
//   .then((data1) => {
//     console.log("Data1: ");
//     logMsg(data1);
//     return getUserPromise(2);
//   })
//   .then((data2) => {
//     console.log("Data2: ");
//     logMsg(data2);
//     return getUserPromise(3);
//   })
//   .then((data3) => {
//     console.log("Data3: ");
//     logMsg(data3);
//   });

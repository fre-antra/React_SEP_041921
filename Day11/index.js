// class MyPromise {
//   constructor(cb) {
//     this.promiseState = "pending";
//     this.resolve = function (data) {
//       this.curData = data;
//       this.promiseState = "fulfilled";
//       setTimeout(() => {
//         while (this.thenCbQueue.length > 0) {
//           const curThenCb = this.thenCbQueue.shift();
//           if (this.curData instanceof MyPromise) {
//             this.curData.then((promiseData) => {
//               curThenCb(promiseData);
//             });
//           } else {
//             this.curData = curThenCb(this.curData);
//           }
//         }
//       }, 0);
//     }.bind(this);
//     this.reject = function () {}.bind(this);
//     this.thenCbQueue = [];
//     cb(this.resolve, this.reject);
//   }
//   then(thenCb) {
//     this.thenCbQueue.push(thenCb);
//     return this;
//   }
// }

// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 0);
// })
//   .then((data1) => {
//     console.log("Data1: ");
//     console.log(data1);
//     return new MyPromise((res, rej) => {
//       res("Hi");
//     });
//   })
//   .then((data2) => {
//     console.log("Data2: ");
//     console.log(data2);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function myFetch(url) {
//   return new Promise((res, rej) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         const response = {
//           json: function () {
//             return JSON.parse(xhttp.responseText);
//           },
//         };
//         res(response);
//       }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
//   });
// }

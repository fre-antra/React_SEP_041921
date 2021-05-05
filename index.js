// // console.log("hello");
// let arr = [1, 2, 3, 4];
// // arr.reduce()
// Array.prototype.myReduce = function (cb, initial) {
//   let acc, currentVal;
//   if (initial == undefined) {
//     for (let i = 1; i < this.length; i++) {
//       currentVal = this[i];
//       acc = cb(acc, currentVal);
//     }
//   } else {
//     acc = initial;
//     for (let i = 0; i < this.length; i++) {
//       currentVal = this[i];
//       acc = cb(acc, currentVal);
//     }
//   }

//   return acc;
// };

// // console.log(arr.myReduce((acc, current) => acc + current, 10));
// // let a = [1, 2, 3, 4];
// // let b = [5, 6, 7];
// // let c = [...a, ...b];
// // console.log(c);
// // let i;
// // for (i = 0; i < 5; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, i * 500);
// // }

// // (function foo() {
// //   for (var i = 0; i < 5; i++) {
// //     setTimeout(() => {
// //       let a = i;
// //       console.log(a);
// //     }, i * 500);
// //   }
// // })();

// let person = {};
// let func1 = function (param) { };
// let func2 = func1.bind(person);
// console.log(func1 === func2);

class MyPromise {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    console.log(a, b);
    console.log(this);
    function foo() {
      console.log(this);
    }
    foo();
  }
}
console.log(this);
function bar() {
  console.log(this);

}
bar();
const p = new MyPromise(5, 6);;

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
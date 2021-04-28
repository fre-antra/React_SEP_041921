// let obj = { name: "Ana", age: 18 };

// Object.prototype.forEach = function (cb) {
//   const keys = Object.keys(this);
//   for (let i = 0; i < keys.length; i++) {
//     cb(keys[i], this[keys[i]]);
//   }
// };
// obj.forEach((key, value) => {
//   console.log(key, value);
// });
// const arr = ["Hello", "Hi"];
// arr.forEach((key, value) => {
//   console.log(key, value);
// });
// const obj2 = { 0: "Hello", 1: "Hi", length: 3 };
// obj2.forEach((key, value) => {
//   console.log(key, value);
// });

/**************Reduce() ***********/
// function sum(arr) {
//   return arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
// }
// console.log(sum([1, 2, 3]));

// Array.prototype.myReduce = function (cb, initial) {
//   let acc, cur;
//   if (initial == undefined) {
//     acc = this[0];
//     for (let i = 1; i < this.length; i++) {
//       cur = this[i];
//       acc = cb(acc, cur);
//     }
//   } else {
//     acc = initial;
//     for (let i = 0; i < this.length; i++) {
//       cur = this[i];
//       acc = cb(acc, cur);
//     }
//   }
//   return acc;
// };

// let myArr = [1, 2, 3, 4];
// console.log(
//   myArr.myReduce((acc, cur) => {
//     return acc * cur;
//   }, 10)
// );

/******************arguments */
// function foo() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// foo(1, 2, 3, 4, 5);
/***************Rest parameter */
// function foo(...args) {
//   console.log(args);
// }
/*****************Spread operator */
// function sum(a, b, c) {
//   return a + b + c;
// }
// const arr1 = [1, 2, 3, 4];
// console.log(sum(...arr));
// const arr2 = [...arr1];
// console.log(arr1 === arr2);
// console.log(arr1 == arr2);
/*****************Data copy */
// let a = 5;
// let b = a;
// console.log(a === b);
// a = 6;
// console.log(b);
// const a = { name: "Ana" };
// const b = { name: a.name };
// console.log(a === b);
// b.name = "Stasia";
// console.log(a, b);
// const c = { ...a };
// console.log(a === c);
// c.name = "Stasia";
// console.log(a, c);
// const d = { name: { value: "Hello" } };
// const e = { ...d };
// e.name.value = "Hi";
// console.log(d, e);

// const _ = require("lodash");
// const fn = _.cloneDeep(d);
// fn.name.value = "Aloha";
// console.log(d, fn);
/************destructure */
// const arr = [{ name: "Ana" }, () => {}];
// const [state, useState] = arr;
// console.log(person, movement);
// const obj = { name: "Ana", age: 18 };
// const { name, age, company } = obj;
// console.log(name, age, company);
/************arrow function */
// const foo = function () {
//   console.log("Normal Function");
//   console.log(this);
// }.bind(this);
// const foo2 = () => {
//   console.log("Arrow Function");
//   console.log(this);
// };

// foo();
// foo2();

// let obj = {
//   foo3: () => this,
//   foo4: () => {
//     return this;
//   },
// };
/******************Closure */
// function foo() {
//   console.log("Hello");
//   var a = 5;
//   return function () {
//     console.log(a);
//   };
// }
// let a = foo();
// console.log(a);
// a();
/*****************IIFE */
// const controller = (function () {
//   let a = 5;
//   return {
//     init: () => {
//       console.log("init: " + a);
//     },
//   };
// })();
// controller.init();
/**************Currying function */

// function add(...a) {
//   return function (...b) {
//     return function (...c) {
//       /***Solution 1 */
//       //   let res1 = a.reduce((acc, cur) => acc + cur, 0);
//       //   let res2 = b.reduce((acc, cur) => acc + cur, 0);
//       //   let res3 = c.reduce((acc, cur) => acc + cur, 0);
//       //   return res1 + res2 + res3;
//       /****Solution 2 */
//       //   return [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0);
//       /*********Solution 3 */
//       return a
//         .concat(b)
//         .concat(c)
//         .reduce((acc, cur) => acc + cur, 0);
//     };
//   };
// }

const add = (...a) => (...b) => (...c) =>
  [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0);
console.log(add(1, 2, 3, 4)()(2, 5));

// *********REDUCER*********

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
//       curr = this[i];
//       acc = cb(acc, cur);
//     }
//   }
//   return acc;
// };

// let myArr = [1, 2, 3, 4];
// console.log(
//   myArr.myReduce((acc, cur) => {
//     return acc + cur;
//   }, 10)
// );

// *********ARGUMENTS*********
// function foo() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguements[i]);
//   }
// }
// foo(1, 2, 3, 4, 5);

// *********REST PARAMETER*********
/*Rest parameter helps the argmument to convert into an array */
// function foo(...args) {
//   console.log(args);
// }

// *********SPREAD OPERATOR*********
/*copy the array */
// function sum(a, b, c) {
//   return a + b + c;
// }
// const arr = [1, 2, 3, 4];
// console.log(sum(...arr))
// const arr2 = [...arr]

// console.log(arr2);
// console.log(arr == arr2) //false because of shallow copy

// *********DATA COPY*********
//primitive data
// let a = 5;
// let b = a;
// console.log(a === b)
// a = 6;
// console.log(b)

// const a = { name: "Ana" };
// const b = { name: a.name };
// console.log(a === b);
// b.name = "Stasia";
// console.log(a, b);
// const c = { ...a };
// console.log(a === c);
// c.name = "Stacia";
// console.log(a, c);
// const d = { name: { value: "Hello" } };
// const e = { ...d };
// e.name.value = "HI"
// console.log(d, e)

// *********DESTRUCTURE*********
// const obj = { name: "Ana", age: 18};
// const { name, age} = obj
// console.log(name, age)

// const arr = [{ name: "Ana" }, () => {}];
// const [person, movement] = arr;
// console.log(person, movement);

// const obj = { name: "ana", age: 18 };
// const { name, age, company } = obj;
// console.log(name, age, company);

// *********ARROW FUNCTION*********
// function foo() {
//    console.log("Normal Function")
//    console.log(this)
// }

// const foo2 = () => {
//    console.log('Arrow Function')
//    console.log(this)
// }

// foo()
// foo2()

// *********CLOSURE*********
// helps to retain data inside of the function and obtain
// function foo() {
//    console.log("Hello")
//    var a = 5;
//    return function() {
//       console.log(a)
//    }
// }

// let a = foo()
// console.log(a)
// a()

// *********IIFE (Immediately Invoked Function Expression)*********
// (function foo() {
//    console.log("Hello")
// })()

// const controller = (function () {
//   let a = 5;
//   return {
//     init: () => {
//       console.log("init: " + a);
//     },
//   };
// })();
// controller.init();

// *********Currying Function*********
//Rest Operator
console.log(add(1,2,3,4,5)(2)(2,3,5))
// function add(...a) {
//    return function(...b) {
//       return function(...c) {
//          let res1 = a.reduce((acc, cur) => acc + cur, 0)
//          let res2 = b.reduce((acc, cur) => acc + cur, 0)
//          let res3 = c.reduce((acc, cur) => acc + cur, 0)
//          return res1 + res2 + res3
//       }
//    }
// }

//Spread Operator
// function add(...a) {
//    return function(...b) {
//       return function(...c) {
//          return [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0)
//       }
//    }
// }

//Concat Solution
// function add(...a) {
//    return function(...b) {
//       return function(...c) {
//          return a
//          .concat(b)
//          .concat(c)
//          .reduce((acc, cur) => acc + cur, 0)
//       }
//    }
// }

const add = (...a) => (...b) => (...c) => {
   [...a, ...b, ...c].reduce((acc, cur) => acc + cur,0)
}

console.log(add(1,2,3,4)()(3,4,5))

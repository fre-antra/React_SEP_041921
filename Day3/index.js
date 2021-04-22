//number
//string
//boolean
//null
//undefined
//symbol
//bigint

// console.log(typeof 1);
// console.log(typeof "abc");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// var a = 5;
// function foo(input) {
//   input = 6;
//   console.log(input);
//   console.log("a: ", a);
// }
// foo(a);
// console.log(a);

// var res = true + false;
// console.log(res);
// console.log("1" === 1);

// class MyObj {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var obj = new MyObj("Ana");
// console.log(obj);

// function myFn() {}
// var arr = [1, 2, 3];
// console.log(myFn);
// console.log(arr);

// var obj = { name: "Ana" };
// function foo(input) {
//   //   input = { name: "Stasia" };
//   input.name = "Stasia";
//   console.log(input);
// }
// foo(obj);
// console.log(obj);

//var, let, const
// function foo() {
//   console.log(a);
//   if (true) {
//     const a = 5;
//   }
//   console.log(a);
// }
// foo();
//temporal dead zone
// const obj = { name: "Ana" };
// obj.name = "Stasia";
// obj = {};
// console.log(obj);
// foo();
// function foo() {
//   var a = 5;
//   console.log(a);
// }
// var foo = () => {
//   console.log(5);
// };

// var foo = function () {
//   console.log(5);
// };

// var foo = function myFoo() {
//   console.log(5);
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p = new Person("Ana", 18); //class object
let p2 = new Person("Stasia", 18);
p.walk = function () {
  console.log("Ana is walking.");
};
p2.walk();
//How can we implement a class method instead of an instance method?

// var a = 5;
// function foo(input){
//     input = 6;
//     console.log(input);
//     console.log("a", a);
// }
// foo(a);
// console.log(a);

// var res = true + false;
// console.log(res);

// console.log("1" == 1); // true
// console.log("1" === 1); // false

// var obj = {};
// console.log(obj);

// class MyObj{
//     constructor(name){
//         this.name = name;
//     }
// }

// var obj = new MyObj("Ana");
// console.log(obj);

// function myFun() {}
// var arr = [1,2,3]
// console.log(myFun);
// console.log(arr);

// var obj = {name: "Ana"};
// function foo(input){
//  //   input = {name: "Stasia"};
//  input.name = "Stasia";
//     console.log(input);
// }
// foo(obj);
// console.log(obj);

// function foo(){
//     console.log(a);
//     if(true){
//         const a = 5;
//     }
//     console.log(a);
// }
// foo();
// const obj = {name: "Ana"};
// obj.name = "Stasia";
// //obj = {};
// console.log(obj);

// foo();
// function foo(){
    
//     var a = 5;
//     console.log(a);
// }

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

function Person(name, age){
    // this.name = name;
    // this.age = age;

    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.__proto__.consructor = Person;
    return obj;
}
var p1 = {name: "Ana", age: 10};// plain object
let p = new Person("Ana", 19);// class object
console.log(p);
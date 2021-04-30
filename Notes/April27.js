//how to implement for each method in an object?


// let obj = {name: "James", age:19}

// for(let i in obj){
//     console.log(` key: ${[i]}, value: ${obj[i]}`);
// }

// Object.prototype.forEach = function (cb) {
//     const keys = Object.keys(this) //return an array of keys
    
//     for (let i = 0; i < keys.length; i++) {
//         cb(keys[i], this[keys[i]]);
        
//     }
// };

// obj.forEach((key, value) => {
//     console.log(key,value);
// });

// const arr = ["Hello","Hi"];

// arr.forEach((key,val) => { //run forEach fromm array.prototype bc this forEach is called on they array
//     console.log(key,val);
// })

// const obj2 = {0: "Hello", 1: "Hi", length: 3};
// obj2.forEach((key,val) =>{ //run forEach from object.prototype bc this forEach is called on the array obj
//         console.log(key,val);
// })


// ***** REDUCE ******//
// function sum(arr){
//     return arr.reduce ((acc,cur) => {
//         return acc + cur;
//     },0)
// }

// console.log(sum([1,2,3]));

// Array.prototype.myReduce = function (cb, initialVal) {
//     let acc, cur;

//     if (initialVal == undefined){
//         acc = this[0];
//         for(let i = 1; i < this.length; i++){
//             cur = this[i];
//             acc = cb(acc,cur);
//         }
//     }
//     else {
//         acc = initialVal;
//         for(let i = 0; i < this.length; i++){
//             cur = this[i];
//             acc = cb(acc,cur);
//         }
//     }

//     return acc;
// }

// let myArr = [1,2,3,4];
// let res = myArr.myReduce(((acc,cur) => {
//     return acc + cur;
// }),10);

// console.log(res);


/*** Arguments  ****/
// function foo() {
//     for(let i = 0; i<arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// foo(1,2,3,4,5);

// /*** Rest parameter ****/
// function foo(...args) {
//     console.log(args);
// }



// /** Spread operator */
// function sum(a,b,c) {
//     return a + b + c;
// }

// const arr = [1,2,3,4];
// // console.log(sum(...arr));
// const arr2 = [...arr];
// console.log(arr === arr2);
// console.log(arr == arr2);

// google what is shallow vs deep copy
/***Data copy ****/
// let a = 5;
// let b = a; //shallow copy
// console.log(a === b);
// a = 6;
// console.log(b); //5
// const a = {name: "Ana"};
// const b = a;
// console.log(a === b); //true
// b.name = "Stasia"
// console.log(a);

// const a = { name: "Ana"};
// const b = { name: a.name};
// console.log(a === b );
// b.name = "Stasia"
// console.log(a,b);
// const c = {...a};
// console.log(a === c);
// c.name = "Stasia";
// console.log(a,c);

// const d = { name: {value:"Hello"} };
// const e = {...d}; //shalow copy
// e.name.value =  "Hi";
// console.log(d,e); //value: hi , value: hi

// const d = {name: {value:"Hello"}};
// const _ = require("lodash");
// const fn = _.cloneDeep(d);
// fn.name.value = "Aloha"
// console.log(d,fn);
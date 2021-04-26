//Abstraction
// class ImplementAbstraction {
//   set(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   display() {
//     console.log("This a is equal to " + this.a);
//     console.log("This b is equal to " + this.b);
//   }
// }

// let obj = new ImplementAbstraction();
// obj.set(1, 2);
// obj.display();

// let arr = [1, 2, 3];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr.forEach((item, index, array) => {
//   //   console.log(item, index, array);
//   //   console.log(arr === array);
//   array.push(item * 2);
// });
// console.log(arr);

// let res = arr.map((item, index, array) => {
//   return array.push(item * 2);
// });
// console.log(arr === res);
// console.log(arr);
// console.log(
//   arr.map((item) => {
//     return (item *= 2);
//   })
// );
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// Array.prototype.myMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// let res = arr.myMap((item, index, array) => {
//   return item * 2;
// });
// console.log(res);
// let obj = { name: "Ana", age: 18 };
// for (let key in obj) {
//   console.log(key + ": " + obj[key]);
// }
// obj.forEach();

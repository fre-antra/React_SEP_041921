// function Parent() {
//     this.name = 'parent'
// }

// Parent.prototype.getName = function () {
//     console.log(this.name);
// }

// function Child() {

// }

// Child.prototype = new Parent();
// var child = new Child();
// console.log(child.name)

// function Parent(name) {
//     this.name = name;
// }
// Parent.prototype.getName = function () {
//     console.log(this.name, this.age);
// }
// function Child(name, age) {
//     Parent.call(this, name);
//     this.age = age;
// }
// var F = function () { }
// F.prototype = Parent.prototype;
// Child.prototype = new F();
// var child1 = new Child("cc", 20)
// console.log(child1)　//Child {name: "cc", age: 20}
b = 'data'
let a  = {}
a.b = 1
a[b] = 1
console.log(a)

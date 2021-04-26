// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   walk() {
//     console.log(this.name + " is walking");
//   }
// }

// Person.prototype.walk = function () {
//   console.log(this.name + " is walking fast");
// };
//__proto__

// let p = new Person("Ana", 18);
// p.__proto__.speak = function () {
//   console.log(this.name + " is speaking");
// };
// p.speak();
// p.walk();
// let p2 = new Person("Stasia");
// p2.speak();
// console.log(Person.prototype === p.__proto__);

// Encapsulation
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this.salary = 0;
  }
  get name() {
    console.log("Get name");
    return this._name;
  }

  set name(newName) {
    console.log("Set name");
    this._name = newName;
  }

  getSalary() {
    console.log("No param");
    return this.salary;
  }
}

// let p = new Person("Ana", 18);
// console.log(p.name);
// p.name = "Stasia";
// console.log(p.name);

class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  getSalary(baseSalary) {
    console.log("With param");
    return this.salary + baseSalary;
  }
}
let e = new Employee("Ana", 18, "Antra");
console.log(e.getSalary());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.walk = function () {
//   console.log(this.name + " is walking fast");
// };

// function Employee(name, age, company) {
//   Person.prototype.constructor.call(this, name, age);
//   this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// console.log(e);
// e.walk();

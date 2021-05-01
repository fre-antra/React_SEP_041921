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
    this._name = name;                            // _ mean this is private, you shouldn't change it without use get and set function
    this._age = age;
    this.salary = 0;
  }
  get name() {                                    //the get function will get used when property get called
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
// console.log(p.name);                             it will triger the get 
// p.name = "Stasia";                               No () here because it's property
// console.log(p.name);

class Employee extends Person {                     // can not mix class and constructor function
  constructor(name, age, company) {                 // use keyword to implement inherent
    super(name, age);                               // tell instance name , age is same as parent
    this.company = company;       
  }
  getSalary(baseSalary) {
    console.log("With param");
    return this.salary + baseSalary;
  }
}
let e = new Employee("Ana", 18, "Antra");
console.log(e.getSalary());                         // it will call Employee class     it will look instance have getSalary method, if not it follow prototype try to get   

// function Person(name, age) {
//   this.name = name;
//   this.age = age;                                        walk in here will work
// }
// Person.prototype.walk = function () {
//   console.log(this.name + " is walking fast");
// };
                                                                    // constructor function implement inherent
// function Employee(name, age, company) {                    Employee is inherent from Person
//   Person.prototype.constructor.call(this, name, age);      Use Person contructor
//   this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype);      if walk not inside Person definition, need do this
// Employee.prototype.constructor = Employee;

// console.log(e);
// e.walk();


// use class more easy
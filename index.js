console.log("Hello World!!!!!");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.baseSalary;
}

Person.prototype.walk = function () {
  console.log(this.name + "walking as");
};

function Employee(name, age, company) {
  Person.prototype.constructor.call(this, name, age);
  this.company = company;
  this.getSalary = function () {
    console.log(this.baseSalary + " at Employee");
  };
}

Employee.prototype = Object.create(Person.prototype);

let e = new Employee("Xred", "123", "TeensS");
e.walk();

// crate a cusom for each
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

let arr = [2, 4, 6];
arr.myForEach((item, index, array) => {
  console.log(item, index, array);
});

Array.prototype.myReduce = function (cb, initial) {
  let accumulator, currentValue;
  if (initial == undefined) {
    accumulator = this[0];
    for (let i = 1; i < this.length; i++) {
      currentValue = this[i];
      accumulator = cb(accumulator, currentValue);
    }
  } else {
    accumulator = initial;
    for (let i = 0; i < this.length; i++) {
      currentValue = this[i];
      accumulator = cb(accumulator, currentValue);
    }
  }
  return accumulator;
};

const reducer = (accumulator, initVal) => {
  return accumulator + initVal;
};

//console.log(arr.myReduce(reducer, 2));

function a1() {
  console.log(arguments);
}

//a1(1,3,3)

//destructuring
//let obj = {name: "paul", age: 18};
//var name = "asd";
//let {name, age} = obj;
////console.log(name, age);

//var z = 12;
(function (...a) {
  return function (...b) {
    return function (...c) {
      //let result1 = a.reduce((acc, cur) => acc + cur, 0);
      //let result2 = b.reduce((acc, cur) => acc + cur, result1);
      //let result3 = c.reduce((acc, cur) => acc + cur, result2);

      console.log(c);
      let r = [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0);
      let r2 = a
        .concat(b)
        .concat(c)
        .reduce((acc, cur) => acc + cur, 0);
      //  console.log(r);
      //console.log(result3);
    };
  };
})(1)(2)(13, 10);

const add = (...a) => (...b) => (...c) =>
  [...a, ...b, ...c].reduce((acc, val) => acc + val, 0);

console.log(add(1, 2, 3)(4, 5,6)(7, 8, 9));

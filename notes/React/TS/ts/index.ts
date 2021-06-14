// basic types
let num: number;
num = 5;
//num = 'trs';
let str: string;
str = 'str';
let bl: boolean;
bl = true;
let u: undefined;     // we have but not defined it yet   null is we dont have something 
u = undefined;
let n: null;
n = null;

let x: any;
x = 6;
x = true;
x = undefined;

let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

let strArr: string[] = ['str'];
// strArr.push(5)
// strArr[0].slice();

// function foo(name: string, age?: number): Person {   // ? mean optional
//   return {
//     name: name,
//     age: age ? age : -1,
//   };
// }

// foo() is error  in js is not 
// console.log(foo('patrick'));

interface IPerson {     // if no constructor function, then use interface better
  name: string;
  age: number;
}
// if you just want use it for the type, use interface

class Person {          // or you need use new keyword use this
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let obj: IPerson = { name: 'patrick', age: 18 }; // can reuse Person interface
let obj2: { name: string; age: number } = { name: 'patrick', age: 18 }; // can not reuse { name: string; age: number } interface
let obj3: Person = { name: 'patrick', age: 18 }; // can reuse Person class

// let res = document.querySelectorAll('h1');
// res.forEach(item=>{})

function addFn(x: number, y: number): number {
  return x + y;
}

const addFn2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

// type aliases
type MyAddFn = (x: number, y: number) => number;

const addFn3: MyAddFn = (x, y) => x + y;

// type unit operator

let numOrStr: string | number;

// class | OOP : inheritance , abstraction, encapsulation, polymorphism
class Animal {
  public name: string;
  // protected name: string;
  //  private name: string;
  // protected    can be used by this and subclass
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name} is running`;
  }
}

const enum CatType {
  CuteCat = 'CuteCat',
  SmallCat = 'SmallCat',
}

class Cat extends Animal {
  type: CatType;
  constructor(name: string, type: CatType) {
    super(name);
    this.type = type;
  }

  run(): string {
    this.name;
    return `${this.type} ${super.run()}`;
  }
}

let myAn = new Animal('pat');
console.log(myAn.name);     //private & protected can not do this
console.log(myAn.run());

let MyCuteCat = new Cat('Ana', CatType.CuteCat);
console.log(MyCuteCat.name);
console.log(MyCuteCat.run());

interface Radio {
  openRadio();
}

interface Battery {
  batteryStatus();
}

interface BatterWithRadio extends Radio {
  batteryStatus();
}

class Car implements BatterWithRadio {
  openRadio() { }
  batteryStatus() { }
}

class Cellphone implements BatterWithRadio {
  openRadio() { }
  batteryStatus() { }
}

// function toNumberArray(x: number, y: number): number[] {
//   return [x, y];
// }

// function toStringArray(x: string, y: string): string[] {
//   return [x, y];
// }
function toArray<T>(x: T, y: T): T[] {    //generic type    let user to choose which type to use
  return [x, y];
}

// toArray<F,S>(x:F,y:S):[F,s]

let toStrArr = toArray<string>('a', 'b');
let toPersonArr = toArray<Person>(
  { name: 'patrick', age: 18 },
  { name: 'patrick', age: 18 }
);

/// tuple

// let tuple: [number, Function, { name: string }] = [
//   1,
//   () => {},
//   { name: 'patrick' },
// ];

// function useState<T>(initialState:T):[T,Function] {
//   const state = initialState;
//   const setState = (newState) => {};

//   return [state, setState];
// }

// const [name, setName] = useState<number>(0);

//FIFO
class Queue<T extends IPerson> {
  queue: T[];
  constructor(initialQueue: T[] = []) {
    //
    this.queue = initialQueue;
  }
  enqueue(item: T): void {
    // push item to array
    console.log('enqueue', item);
    // this.queue.push(item); //1 [1] 2 [1,2]
    this.queue.unshift(item); // 1 [1] 2 [2,1]
  }
  dequeue(): T {
    //
    // return this.queue.shift();
    return this.queue.pop();
  }
  getQueue(index?: number): T | T[] {
    if (typeof index === 'number') {
      const len = this.queue.length;
      if (index >= 0 && index <= len) {
        return this.queue[index];
      } else {
        console.warn('index is out of range');
        return null;
      }
    }
    return this.queue;
  }
}

const q = new Queue<{ name: string; age: number; value: number }>([
  { name: 'psd', age: 1, value: 1 },
  { name: 'psd', age: 1, value: 1 },
  { name: 'psd', age: 1, value: 1 },
]);
console.log(q.getQueue()); /// []
q.enqueue({ name: 'psd', age: 1, value: 1 });
q.enqueue({ name: 'psd', age: 1, value: 1 });
console.log(q.getQueue()); // [1,2]
let item = q.dequeue();
console.log(item); // 1
console.log(q.getQueue()); // [2];

// class MyQueue implements Queue {
//   constructor() {}
//   enqueue() {}
//   dequeue() {}
//   getQueue() {}
// }

// class HerQueue {
//   constructor() {}
//   enqueue() {}
//   dequeue() {}
//   getQueue() {}
// }

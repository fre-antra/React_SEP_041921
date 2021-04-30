
// oop

// encapsulation
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     walk() {
//         console.log(this.#name + ' walk around the world!');
//         // console.log(this.#name, 'walk around the world!');
//         // console.log(`${this.#name} walk around the world!`);
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.walk = function () {
//     console.log(this.name + ' walk around the world!');
// }
// // __proto__

// const p = new Person('Jojo', 20);
// p.__proto__.walk = function () {
//     console.log(this.name + ' walk around the world!');
// }
// const p2 = new Person('Jojo', 20);
// p2.walk();
// console.log(p);

// inheritance
// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     walk() {
//         console.log('this is the company ' + this.company);
//     }
//     walk(name, age) {
//         console.log(`this is the company ${this.company} ${name} ${age}`);
//     }
// }
// const e = new Employee('Dio', 20, 'Jump');
// e.walk();
// console.log(e);

// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = company;
// }
// Employee.prototype = Person.prototype;
// Employee.prototype.constructor = Employee;
// const e = new Employee('Dio', 20, 'Jump');
// e.walk();
// console.log(e);

// // Poly-morph-ism
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// // Abstraction
// class Circle {
//     #pi = 3.1415926;
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getArea() {
//         return this.#pi * this.radius ** 2;
//     }
// }
// const c = new Circle(20);
// console.log(c.getArea());


// loop

// const obj = {name: 'Jojo', age: 20};

// for (let key in obj) {
//     console.log(obj[key]);
// }
// for (let i in arr) {
//     console.log(arr[i]);
// };

// Array.prototype.myMap = function (callback) {
//     // console.log(this);
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this));
//     }
//     return res;
// }
// const arr = [1, 2, 3];

// arr.__proto__.myMap = function (callback) {
//     // console.log(this);
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this));
//     }
//     return res;
// }

// const arr1 = arr.myMap((val, index, array) => {
//     return val * 2;
// });

// console.log(arr1);
// Array.prototype.myReduce = function (callback, initacc) {
//     let acc = initacc;
//     for (let i = 0; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }
//     return acc;
// }
// const arr = [1, 2, 3];
// const arr1 = arr.myReduce((acc, cur) => acc + cur, 6);

// // filter, reduce, some, any
// console.log(arr1);

// rest parameters vs. spread operator

// function foo(num1, num2, ...arg, num3) {
//     const arr = [{name: 'Jojo'}, ...arg ];
//     console.log(arr);
// }

// foo(1, 2, 3, 4, 5, 6, 7);

// const arr = [1, 2, 3];
// const arr1 = [2, ...arr, 4]; 


// // object copy
// // shadow, deep copy

// const obj = {
//     name: 'Dio',
//     age: 200,
//     case: [
//         {name: 1}
//     ],
//     date: new Date,
//     foo: function() {
//         console.log(111);
//     }
// };

// // 1. spread operator
// const obj2 = {...obj};
// console.log(obj2);
// obj2.case.push({name: 2});
// console.log(obj);

// // 2. json.pase
// const obj3 = JSON.parse(JSON.stringify(obj));
// console.log(obj, obj3)

// 3. lodash: _.clonedeep()


// const obj = {
//     name: 'Dio', 
//     age: 200,
//     arr: [
//         { id: 1 }
//     ],
//     date: new Date(),
//     foo() {
//         console.log(111);
//     }
// };

// console.log(obj1, obj);
// // const obj1 = obj;

// // // fist level deep copy
// // const obj2 = {...obj};
// // console.log(obj2);
// // console.log(obj.name === obj2.name);

// // deep copy
// // console.log(typeof JSON.stringify(obj));
// const obj3 = JSON.parse(JSON.stringify(obj));
// console.log(obj);
// console.log(obj3);

// library: lodash
// const _ = require('lodash');
// const obj1 = _.clonedeep(obj);

// // destruction
// const data = { age: 200 };
// const { age } = data;
// console.log(age);

// const foo = (data) => {
//     return { ...this[0], ...data }
// }
// const obj = { name: 'Dio', age: 10 };
// const arr = [obj, foo];

// let [state, setState] = [obj, foo];
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)
// state = setState({ age: 200 });
// console.log(state);

// // this
// // global
// function foo() {
//     console.log(this);
// }
// foo();

// // objct own the method
// const obj = {
//     foo() {
//         console.log(this);
//     }
// }
// obj.foo();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     bar() {
//         console.log(this);
//     }
// }
// const p = new Person('Dio');
// p.bar();
// console.log(p.bar);

// Array.prototype.myMap = function(cb) {
//     console.log(this)
// }
// const arr = new Array();

// // call, apply, bind
// const obj = {
//     pi: 3.1415926,
//     getPi() {
//         return this.pi;
//     }
// }

// function foo(circle, radius) {
//     console.log(`${circle} is a circle, the area is ${this.getPi() * (radius ** 2)}`);
// }
// const bar = foo.bind(obj);
// bar('Jojo', 20);

// foo.call(obj, 'Jojo', 20);
// foo.apply(obj, ['Jojo', 20]);

// closure and iife

// const bar = (function(num) {
//     return function(num1) {
//         return num + num1;
//     }
// })(4);

// ES6 arrow function
// const myObj = {
//     myMethod() {
//         console.log(this); // <-------

//         const foo = function() {
//             console.log(this);
//         }.bind(this); // <---------

//         const bar = () => {
//             console.log(this);
//         }
//         foo();
//         bar();
//     }
// };
// myObj.myMethod();

// const Car = (name) => {
//     this.name = name;
// }
// const c = new Car('Jojo');

// function foo() {
//     console.log(arguments);
// }
// const bar = (...rest) => {
//     console.log(rest);
// }
// bar(1, 2, 3, 4);



// const foo = limitedFunction(3, (a, b) => console.log(a + b));

// function limitedFunction(num, cb) {

//     let count = 0;
//     return function(...arg) { // rest
//         if (count === num) 
//             console.log('over limited');
//         else {
//             cb(...arg); // spread
//             count++;
//         }
//     }
// }

// foo(3, 4) // 7
// foo(4, 5) // 9
// foo(5, 6) // 11
// foo(5, 6) // 11
// foo(5, 6) // 11
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'

// console.log(bar(5)); // 9

// const callback1 = (a) => a + 2; // 5
// const callback2 = (b) => b * 2; // 10
// const callback3 = (c) => c - 2; // 8

// console.log(runAll(callback1, callback2, callback3)(3)); // 8

// const runAll = () => {

// }


// async

// var i;
// for (i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), i * 1000);
// }

// for (var index = 0; index < 5; index++) {
//     // setTimeout(() => console.log(index), index * 1000);
//     (function(i) {
//         var v = i;
//         setTimeout(() => console.log(v), (5 - v) * 1000);
//     })(index);
// }

// call stack: for set
// async api || web api: 5, 4, 3, 2, 1
// 1. , 5s 
// 2. console.log(i), 4s
// 3. console.log(i), 3s
// 4.
// 5.        1s

// message queue: [1,2,345console.log(i),console.log(i)]

// 5 5 5 5 5

// callback function
// const foo = () => {
//     console.log('this is foo()');
// }
// const bar = () => {
//     console.log('this is bar()');
// }
// const getRandomTime = () => {
//     return Math.floor(Math.random() * 6);
// }

// const callFnInRandomTime = (cb) => {
//     const timer = getRandomTime();
//     console.log(timer);
//     setTimeout(cb, timer * 1000);
// }

// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(foo);
//     });
// });

// ES6 myPromise
// XMLHttpRequest

// function getUser(callback, id) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const data = JSON.parse(xhttp.response)
//             callback(data); // <-----------------------------
//         }
//     };
//     const url = 'https://jsonplaceholder.typicode.com/todos/';

//     xhttp.open("GET", url + id, true);
//     xhttp.send();
// }

// function print(data) {
//     console.log(data);
// }

// 12, 5, 34
// getUser(print, 12);
// getUser(print, 5);
// getUser(print, 34);

// Promise

// function print(data) {
//     console.log(data);
// }

// function getUserPromise(id) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 const data = JSON.parse(xhttp.response)
//                 resolve(data); // <-----------------------------
//             }
//         };
//         const url = 'https://jsonplaceholder.typicode.com/todos/';

//         xhttp.open("GET", url + id, true);
//         xhttp.send();
//     })
// }

// getUser(data12 => {
//     print(data12);
//     getUser(data5 => {
//         print(data5);
//         getUser(print, 34)
//     }, 5)
// }, 12)

// getUserPromise(12)
//     .then(data => {
//         print(data);
//         return getUserPromise(5)
//     })
//     .then(data => {
//         print(data);
//         return getUserPromise(34)
//     })
//     .then(data => {
//         print(data);
//     })
//     .catch(err => console.log(err));

// // async await
// async function getUserAsync() {
//     try {
//         const data12 = await getUserPromise(12);
//         print(data12);
//         const data5 = await getUserPromise(5);
//         print(data5);
//         const data34 = await getUserPromise(34);
//         print(data34);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUserAsync();

// MyPromise

class MyPromise {
    thenCallBackQueue = []; // queue
    catchCallBackQueue = []; // queue
    promiseState = 'pending';
    currentDate;

    constructor(executor) {
        try {
            executor(this.resolve, this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve = (data) => {
        setTimeout(() => {
            try {
                this.promiseState = 'fulfilled';

                // <-----------
                if (!this.thenCallBackQueue.length) return;

                this.currentDate = data;
                while (this.thenCallBackQueue.length) {
                    const cb = this.thenCallBackQueue.shift();

                    if (this.currentDate instanceof MyPromise) {
                        this.currentDate.then(dataFromNew => {
                            this.currentDate = cb(dataFromNew);
                        })
                    } else {
                        this.currentDate = cb !== undefined
                            ? cb(this.currentDate)
                            : this.currentDate;
                    }
                }

            } catch (error) {
                this.reject(error);
            }
        }, 0);
    }

    reject(error) {
        this.promiseState = 'rejected';
        setTimeout(() => {
            if (!this.catchCallBackQueue.length) return;

            this.currentDate = error;
            const cb = this.catchCallBackQueue.shift();

            if (this.currentDate instanceof MyPromise) {
                this.currentDate.then(dataFromNew => {
                    this.currentDate = cb(dataFromNew);
                })
            } else {
                this.currentDate = cb(this.currentDate);
            }
        }, 0);
    }

    then(resolvefn) {
        if (this.promiseState === 'pending') {
            this.thenCallBackQueue.push(resolvefn);
        }
        return this;
    }

    catch(rejectfn) {
        this.catchCallBackQueue.push(rejectfn);
        return this;
    }

    static all = (array) => {
        let count = 0;
        const resolveData = new Array(array.length);

        return new MyPromise((resolve, reject) => {
            array.forEach((ele, i) => {
                if (ele instanceof MyPromise) {
                    ele.then(data => {
                        count++;
                        resolveData[i] = data;
                        if (count === array.length)
                            resolve(resolveData);
                    }).catch(err => reject(err));
                } else {
                    count++;
                    resolveData[i] = ele;
                    if (count === array.length)
                        resolve(resolveData);
                }
            })
        });
    }

    static resolve(resdata) {
        return new MyPromise((res, _) => {
            res(resdata);
        });
    }
    static reject(rejdata) {
        return new MyPromise((_, reject) => {
            reject(rejdata);
        });
    }
}

const getRandomTime = () => {
    return Math.floor(Math.random() * 5);
}

const p = new Promise((resolve, reject) => {
    const timer = getRandomTime();
    console.log(`Wait ${timer}s`);
    if (timer > 1) {
        setTimeout(() => {
            console.log('promise');
            resolve('Hello'); // <----------- typeof
        }, timer * 1000);
    } else {
        reject('timer smaller then 2');
    }

}) // res -> then; rej -> catch
    .then()
    .then(data => console.log(data))
    .catch(err => console.log(err));


// // console.log(p);
// // message queue: [resolve('Hello')]
// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// // expected output: Array [3, 42, "foo"]


// function myFetch(url) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 const data = JSON.parse(xhttp.response)

//                 resolve({
//                     json() {
//                         return JSON.parse(xhttp.response);
//                     }
//                 }); 
//             }
//         };

//         xhttp.open("GET", url, true);
//         xhttp.send();
//     })
// }

// const url = 'https://jsonplaceholder.typicode.com/todos/'
// // myFetch(url + 1)
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// GET, POST, DELETE, PUT, PATCH

// const callback1 = (a) => a + 2; // 5
// const callback2 = (b) => b * 2; // 10

// const runAll = (...cbs) => {
//     const arr = [...cbs];

//     const foo = (num1) => {
//         return arr.reduce((acc, cb) => cb(acc), num1);

//         // let res = num1;
//         // while (arr.length) {
//         //     const cb = arr.shift();
//         //     res = cb(res)
//         // }
//         // return res;
//     }

//     return (num) => foo(num);
// }
// const bar = runAll(callback1, callback2);
// console.log(bar(3)); // 10

// // myFetch
// function myFetch(url, options) {
//     return new Promise((resolve, reject) => {
//         let method = options && options.method ? options.method : 'GET';
//         const xhttp = new XMLHttpRequest();

//         xhttp.open(method, url, true);
//         if (options && options.headers)
//             Object.keys(options.headers).forEach(key => {
//                 xhttp.setRequestHeader(key, options.headers[key]);
//             });
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status >= 200 && this.status < 300)
//                 resolve({ json: () => JSON.parse(xhttp.response) });
//             else if (this.status < 200 || this.status >= 300)
//                 reject({ errorState: this.readyState, errorStatus: this.status });
//         };
//         options && options.body ? xhttp.send(options.body) : xhttp.send();
//     });
// }

// // GET
// myFetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // POST
// myFetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     body: JSON.stringify({
//         userId: 1,
//         title: 'bar',
//         completed: false,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(err => console.log(err));

// // DELETE
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });

// // PUT
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // PATCH
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



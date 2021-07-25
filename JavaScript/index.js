// class MyPromise {
//     thenCbQueue = [];
//     catchCbQueue = [];
//     promiseState = "pending";
//     curData;

//     constructor(executor) {
//         try {
//             executor(this.resolve, this.reject.bind(this));
//         } catch (error) {
//             this.reject(error);
//         }
//     }

//     resolve = (data) => {
//         setTimeout(() => {
//             try {
//                 if (this.promiseState !== 'pending') return;

//                 this.promiseState = 'fulfilled';
//                 this.curData = data;
//                 while (this.thenCbQueue.length) {
                        // const cb = this.thenCallBackQueue.shift();

                        // if (this.currentdata instanceof MyPromise) {
                        //     this.currentdata.then(promiseData => {
                        //         this.currentdata = cb(promiseData);
                        //     }).catch(error => {
                        //         this.reject(error);
                        //     });

                        // } else {
                        //     this.currentdata = cb(this.currentdata);
                        // }
//                 }
//             } catch (error) {
//                 this.reject(error);
//             }
//         }, 0);
//     }

//     reject(data) {
//         this.promiseState = 'rejected';
//         setTimeout(() => {
//             this.curData = data;
//             const curCatch = this.catchCbQueue.shift();
//             if (this.curData instanceof MyPromise) {
//                 this.curData.then((promiseData) => {
//                     this.curData = curCatch(promiseData);
//                 });
//             } else {
//                 this.curData = curCatch(this.curData);
//             }
//         }, 0);
//     }

//     then(thenCb) {
//         if (this.promiseState === 'pending') {
//             this.thenCbQueue.push(thenCb);
//         }
//         return this;
//     }

//     catch(catchCb) {
//         this.catchCbQueue.push(catchCb);
//         return this;
//     }

//     static resolve(resdata) {
//         return new MyPromise((res, _) => {
//             res(resdata);
//         });
//     }

//     static reject(rejdata) {
//         return new MyPromise((_, rej) => {
//             rej(rejdata);
//         });
//     }

//     static all(array) {
//         let count = 0;
//         const resolveData = new Array(array.length);

//         return new MyPromise((resolve, reject) => {
//             array.forEach((ele, i) => {
//                 if (ele instanceof MyPromise) {

//                     ele.then(data => {
//                         count++;
//                         resolveData[i] = data;
//                         if (count === array.length) {
//                             resolve(resolveData);
//                         }
//                     }).catch(err => reject(err));
//                 } else {
//                     count++;
//                     resolveData[i] = ele;
//                     if (count === array.length) {
//                         resolve(resolveData);
//                     }
//                 }
//             });
//         });
//     }
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

// const getRandomTime = () => {
//     return Math.floor(Math.random() * 5);
// }

// const p = new Promise((resolve, reject) => {
//     const timer = getRandomTime();
//     console.log(`Wait ${timer}s`);
//     if (timer > 2) {
//         setTimeout(() => {
//             resolve("Hello");
//         }, timer * 1000);
//     } else {
//         reject('timer smaller then 2');
//     }

// })
//     .then((data1) => {
//         console.log("Data1: ", data1);
//         return new MyPromise((res, rej) => {
//             try {
//                 res('hello');
//             } catch (error) {
//                 rej(error);
//             }
//         });
//     })
//     .then((data2) => {
//         console.log("Data2:", data2);
//     })
//     .catch(err => console.log(err));


// async function foo() {

//     const data = await fetch(url);

// }

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
//             else if (this.status < 200 || this.status >= 300) {
//                 reject({ errorStat: this.readyState });
//             }
//         }

//         options && options.body ? xhttp.send(options.body) : xhttp.send();
//     });
// }

// // // get/:id
// myFetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));

// // post
// myFetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(err => console.log(err));

// // put
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

// // patch
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// // delete
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

// // this
// global
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

// // for instance
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

// // ES6 arrow function
// const myObj = {
//     myMethod() {
//         console.log(this); // <------

//         const foo = function() {
//             console.log(this);
//         }.bind(this); // <-------

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

// Array.prototype.myFilter = function(callback) {
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// }

// console.log([1, 2, 3].myFilter(ele => ele === 2)) ; 

// for (var i = 0; i < 5; i++) {
//     (function foo(v){
//         setTimeout(() => console.log(v), v * 1000);
//     })(i);
// }
// call stack

class MyPromise {
    thenCallBackQueue = [];
    catchCallBackQueue = [];
    currentdata;
    promiseState = 'pending';

    constructor(executor) {
        try {
            executor(this.resolve, this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve = resolvedata => {
        try {
            setTimeout(() => {
                if (this.promiseState !== 'pending') return;

                this.currentdata = resolvedata;
                while (this.thenCallBackQueue.length) {
                    const cb = this.thenCallBackQueue.shift();
                    if (this.currentdata instanceof MyPromise) {
                        this.currentdata.then(promiseData => {
                            this.currentdata = cb(promiseData);
                        }).catch(error => {
                            this.reject(error);
                        });
                    } else {
                        this.currentdata = cb(this.currentdata);
                    }
                }
            }, 0);
        } catch (error) {
            this.reject(error);
        }
    }
    reject(rejectdata) {
        this.promiseState = 'rejected';
        setTimeout(() => {
            if (!this.catchCallBackQueue.length) return;
            const cb = this.catchCallBackQueue.shift();
            cb(rejectdata);
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
}
// // console.log(1);
const getRandomNumber = () => Math.floor(Math.random() * 6); // 0 - 5

const p = new MyPromise((resolve, reject) => {
    const time = getRandomNumber();
    console.log(`time: ${time}`);
    if (time > 3) {
        resolve('resolve data');
    } else {
        reject(' smaller then 3 ');
    }
})
    .then(data => {
        console.log(data);
        // return 'eee';
        return new MyPromise((res, rej) => {
            rej('return promise');
        })
            .catch(data => console.log('hello'));
    })
    .then(data => console.log(data))
    .catch(data => {
        console.log(data);
        return 'after catch';
    })
    .catch(data => console.log(data));
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
//                     const curThenCb = this.thenCbQueue.shift();
//                     if (this.curData instanceof MyPromise) {
//                         this.curData.then((promiseData) => {
//                             curThenCb(promiseData);
//                         });
//                     } else {
//                         this.curData = curThenCb(this.curData);
//                     }
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
// expected output: Array [3, 42, "foo"]

// const getRandomTime = () => {
//     return Math.floor(Math.random() * 5);
// }

// const p = new MyPromise((resolve, reject) => {
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
//     // .then((data1) => {
//     //     console.log("Data1: ", data1);
//     //     return new MyPromise((res, rej) => {
//     //         try {
//     //             res('hello');
//     //         } catch (error) {
//     //             rej(error);
//     //         }
//     //     });
//     // })
//     .then((data2) => {
//         console.log("Data2:", data2);
//     })
//     .catch(err => console.log(err));

// myFetch
function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        let method = options && options.method
            ? options.method
            : 'GET';
        const xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);

        if (options && options.headers) {
            Object.keys(options.headers).forEach(key => {
                xhttp.setRequestHeader(key, options.headers[key]);
            });
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
                resolve({
                    json: () => JSON.parse(xhttp.response)
                });
            }
            // else if (this.status < 200 || this.status >= 300) {
            //     console.log(this.readyState, this.status);
            //     reject({errorStat: this.readyState});
            // }
        };

        options && options.body ? xhttp.send(options.body) : xhttp.send();
    });
}

// // get/:id
// myFetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// post
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
//     .then((json) => console.log(json));

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

// objct own the method
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

Array.prototype.myFilter = function(callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
}

console.log([1, 2, 3].filter(ele => ele === 2))

// ---
//const b = (cb) => {
//  setTimeout(cb, 1000);
//};

//b(cb);
//const a = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("I am called 1st");
//  }, 2000);
//});
//a.then((data) => {
//  console.log(data);
//  return new Promise((resolve, reject) => {
//    resolve("I am called 2nd");
//  });
//}).then((data) => console.log(data));

//class MyPromise {
//  constructor(cb) {
//    this.PromiseState = "pending";
//    this.resolve = function (data) {
//      this.curData = data;
//      this.PromiseState = "fulfiled";
//      //  for each then, we add only 1 and dequeue 1
//      setTimeout(() => {
//        while (this.thenCbQueue.length > 0) {
//          var mostCurrentCb = this.thenCbQueue.shift();
//          if (this.curData instanceof MyPromise) {
//            this.curData.then((promiseData) => {
//              mostCurrentCb(promiseData);
//            });
//          } else {
//            this.curData = mostCurrentCb(this.curData);
//          }
//        }
//      }, 0);
//    }.bind(this);

//    this.reject = function (error) {};

//    this.thenCbQueue = [];
//    cb(this.resolve, this.reject);
//  }

//  then(thenCb) {
//    this.thenCbQueue.push(thenCb);
//    return this;
//  }
//}

//const p = new MyPromise((resolve, reject) => {
//  setTimeout(() => {
//    resolve(123);
//  }, 0);
//})
//  .then((data) => {
//    console.log("data", data);
//    return new Promise((res, rej) => {
//      setTimeout(() => {
//        res("Atomic bomb");
//      }, 0);
//    });
//  })
//  .then((data2) => {
//    console.log("data2", data2);
//  });

//  fetch("https://jsonplaceholder.typicode.com/todos/1")
//  .then((res) => res.json())
//  .then((json) => console.log(json));

//  function myFetch(url) {
//    return new Promise((res, rej) => {
//        var xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function() {
//            if (this.readyState == 4 && this.status == 200) {
//                const response = {
//                    json: function() {
//                        return JSON.parse(xhttp.responseText);
//                    },
//                };
//                res(response);
//            }
//        };
//        xhttp.open("GET", url, true);
//        xhttp.send();
//    })
//  }

//const person = {
//    fname: "Jane",
//    lname: "Doe",
//    getFullName: function() {
//        return this.fname + " " + this.lname;
//    }
//}

//var logName = function (hobby, food) {
//    // If you not use bind, this will be the window object or other thing based on the context
//    console.log(this);
//    // if you bind on person, this become person
//    console.log(this.getFullName() + " likes" + hobby + " food" + food);
//}.bind(person);

//logName("Sleep", "Rice")
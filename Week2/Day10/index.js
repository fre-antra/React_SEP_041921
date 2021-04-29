// Async Programming in JS
// console.log(1)
// setTimeout(function() {
//    console.log(2)
// },1000)
// console.log(3)
// setTimeout(function() {
//    console.log(4)
// },0)

//Event Loop: Call Stack | Task/Event Queue | Async/Browser API
// function foo() {
//   for (var i = 0; i < 5; i++) {
//      (function () {
//         var num = i;
//         setTimeout(() => {
//           console.log(num);
//         }, i * 1000);
//      })()
//   }
// }

// function foo() {
//    var i = 0;
//    let a  = i * 1000;
//    function foo() {
//       console.log(i);
//       return function() {
//          console.log(i)
//       }
//    }
//    setTimeout(foo(), a)
//    i = 5;
// }

// foo();

// function foo() {
//   console.log("foo");
// }

// function foo2() {
//   console.log("foo2");
// }

function randomTimer() {
  let timer = Math.random() * 5000;
  console.log("Delayed time:", timer);
  return timer;
}

// function callFooWithTimer() {
//   setTimeout(foo2, randomTimer());
// }
// // callFooWithTimer()

// function callFnWithTimer(cb) {
//   let timer = randomTimer();
//   setTimeout(cb, timer);
// }

// callFnWithTimer(() => {
//   callFnWithTimer(foo2);
// });

//********** XML HTTP REQUEST ***********
let data;
function getUser(cb, userID) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(xhttp.responseText);
      cb(data);
    }
  };
  xhttp.open(
    "GET",
    "https://jsonplaceholder.typicode.com/todos/" + userID,
    true
  );
  xhttp.send();
}

// getUser((data) => {
//    logMsg(data)}, 2);

function logMsg(msg) {
  console.warn(msg);
}

//********** PROMISE ***********
const p = new Promise((resolve, reject) => {
  let timer = randomTimer();
  setTimeout(() => {
    resolve("hello");
  }, timer);
}). then((data) => {
   logMsg(data)
});


//**** Event loop: Call stack | Task/Event queue | Async/Brower API */
// function foo() {
//     for (let i= 0;i<5;i++) {
//             setTimeout(() => {
//             console.log(i);
//         }, i*1000)
//     }
// }



// function foo() {
//     var i = 0;
//     let a = i*1000;
//     function foo(){
//         console.log(i);
//         return function(){
//             console.log(i);
//         }
//     }
//     setTimeout(foo(),a);
//     i=5;
//   }
// foo();

function foo(){
    console.log("Foo");
}

function randomTimer(){
    let timer = Math.random()*5000;
    console.log("delay time:", timer );
    return timer;
}

function callFooWithTimer(){
    setTimeout(foo,randomTimer())
}

callFooWithTimer();


getUser(logMsg(data));



async function testAsyncFn(data) {
    console.log('calling');
    const result = await logMsg(data);
    console.log(result);
    // expected output: "resolved"
  }
  
  testAsyncFn();

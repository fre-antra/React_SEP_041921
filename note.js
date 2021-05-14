// virtual dom vs dom
// diff algrth
// state | data binding : state change => view change (model => view)
// ES | JS | NODEJS
// class P {
//   //   constructor() {
//   //     this.state = {};
//   //   }
//   state = {};
// }

// let myP = new P();
// console.log(myP);
// document.getElementById('hello');

let state = {
  counter: 0,
};

function setState(newState) {
  if (typeof newState === 'function') {
    setTimeout(() => {
      state = newState(state);
    });
  } else {
    setTimeout(() => {
      state = newState;
    });
  }
}
let a = { counter: state.counter + 1 };
setState(a); // 1
let b = { counter: state.counter + 1 };
setState(b); // 1
setTimeout(() => {
  console.log(state); // 1
});

// setState((preState) => {
//   return {
//     counter: preState.counter + 1,
//   };
// });
// setState((preState) => {
//   return {
//     counter: preState.counter + 1,
//   };
// });

// setTimeout(() => {
//   console.log(state);
// }, 1000);

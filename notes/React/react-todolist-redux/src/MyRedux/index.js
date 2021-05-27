//import { createStore } from 'redux';          this for npm
const { createStore } = require('redux');       // this for node

// redux is state management tool

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 10 }, action) {      // default state  action is object.
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// undefiend is primtive data, we can not assign a property to it.
export let store = createStore(counterReducer);     //function()  return a store object
export const pStore = pCreateStore(counterReducer);

function pCreateStore(reducerFn) {
  let state = reducerFn(undefined, { type: '____INIT____' });

  let listners = [];
  function subscribe(callbackFn) {        // it will store in the observer when you trigger dispatch function, it will trigger this
    listners.push(callbackFn);
    return () => {      // unsubscribe function can be called by ReduxTester line 12  或者这个文件的82-85 
      listners = listners.filter((listner) => listner !== callbackFn);
    };
  }

  function dispatch(action) {     //update the state based on the action
    state = reducerFn(state, action);
    listners.forEach((listner) => {   // 上面存了的每次dispatch要放出subscribe的function，不需要pass state, invoke the function will use state by itself.
      listner();
    });
  }
  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

//const unsub = store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' });
//unsub();
// {value: 1}
// store.dispatch({ type: 'counter/incremented' });
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// {value: 1}

//console.log(pStore.getState()); // 0

// const unsub = pStore.subscribe(() => console.log(pStore.getState()));
// pStore.dispatch({ type: 'counter/incremented' });
// // //console.log(pStore.getState()); // 1
// unsub();
// pStore.dispatch({ type: 'counter/incremented' });
// pStore.dispatch({ type: 'counter/decremented' });

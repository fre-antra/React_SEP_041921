//import { createStore } from 'redux'

///**
// * This is a reducer - a function that takes a current state value and an
// * action object describing "what happened", and returns a new state value.
// * A reducer's function signature is: (state, action) => newState
// *
// * The Redux state should contain only plain JS objects, arrays, and primitives.
// * The root state value is usually an object.  It's important that you should
// * not mutate the state object, but return a new object if the state changes.
// *
// * You can use any conditional logic you want in a reducer. In this example,
// * we use a switch statement, but it's not required.
// */
//function counterReducer(state = { value: 0 }, action) {
//  switch (action.type) {
//    case 'counter/incremented':
//      return { value: state.value + 1 }
//    case 'counter/decremented':
//      return { value: state.value - 1 }
//    default:
//      return state
//  }
//}

//// Create a Redux store holding the state of your app.
//// Its API is { subscribe, dispatch, getState }.
//export let store = createStore(counterReducer)

//// You can use subscribe() to update the UI in response to state changes.
//// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
//// There may be additional use cases where it's helpful to subscribe as well.

////store.subscribe(() => console.log(store.getState()))

////// The only way to mutate the internal state is to dispatch an action.
////// The actions can be serialized, logged or stored and later replayed.
////store.dispatch({ type: 'counter/incremented' })
////// {value: 1}
////store.dispatch({ type: 'counter/incremented' })
////// {value: 2}
////store.dispatch({ type: 'counter/decremented' })
////// {value: 1}

// action, store, reducers
const increaseAction = { type: "increaseByOne" };
const decreaseAction = { type: "decreaseByOne" };

// reducers
function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "increaseByOne":
      return { counter: state.counter + 1 };
    case "decreaseByOne":
      return { counter: state.counter -1 };
    default:
        return state;
  }
}

// store, store has subscribe, dispatch, getState
function createStore(reducers) {
    let state = {};
    let cbs = [];
    state = reducers(undefined, {type: '__INIT__'})
    //console.log(state);
    function getState() {
        return state;
    }

    function subscribe(cb) {
        cbs.push(cb);
    }

    function dispatch(action) {
        state = reducers(state,action);
        cbs.forEach((cb) => cb())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

export const store = createStore(counterReducer);
//console.log(store.getState());
// import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// const { createStore } = require('redux');

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// action: Obj has the type property
// actionType:
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// actionCreator:
const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const incrementDelay = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionCreater.increment());
    }, 1000);
  };
};

export const actionCreater = {
  increment,
  decrement,
  incrementDelay,
};

// reducer | pure function : no side effect , same input same output, data imutable
const initialState = {
  counter: 100,
  title: 'Counter',
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const createStore = (reducerFn) => {
  let subscribeListeners = [];
  let state = reducerFn(undefined, { type: '___INIT___' });
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
    if (typeof action === 'function') {
      console.log(action);
      action(dispatch, getState);
    } else {
      state = reducerFn(state, action);
      subscribeListeners.forEach((listenerFn) => {
        listenerFn();
      });
    }
    console.log('dispatch, newState:', state);
  };
  const subscribe = (listenerFn) => {
    subscribeListeners.push(listenerFn);
    console.log('subscribeListeners', subscribeListeners);

    return () => {
      subscribeListeners.splice(subscribeListeners.indexOf(listenerFn), 1);
      console.log('unsubscribe', subscribeListeners);
    };
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
};
// console.log(applyMiddleware);
export let store = createStore(counterReducer);
// export let store = createStore(counterReducer, applyMiddleware(thunk));
// console.log('store:', store);
// console.log('store.getState:', store.getState());

// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log('subscribe', store.getState()));

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch(actionCreater.increment());
// console.log('store.getState:', store.getState());
// // // 1
// store.dispatch(actionCreater.increment());
// // // 2
// store.dispatch(actionCreater.decrement());
// // //1;

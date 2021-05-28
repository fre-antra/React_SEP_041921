import React from "react";
//import { connect } from "react-redux";
import { myconnect } from "../Redux/index";

class TestRedux extends React.Component {
  //componentDidMount() {
  //    const { counter, increase, decrease } = this.props;
  //    increase();
  //    increase();
  //    decrease()
  //}

  render() {
    const { counter, increase, decrease } = this.props;
    console.log('from TestRedux', this.props);
    return (
      <>
        <h1>Test Redux: </h1>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={decrease}>decrease</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return { counter: state.counter, otherArg: 10 };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: "increaseByOne" }),
        decrease: () => dispatch({ type: "decreaseByOne" })
    };
  };

export default myconnect(mapStateToProps, mapDispatchToProps)(TestRedux);

//export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);

// action, store, reducers
//const increaseAction = { type: "increaseByOne" };
//const decreaseAction = { type: "decreaseByOne" };

//// reducers
//function counterReducer(state = { counter: 0 }, action) {
//  switch (action.type) {
//    case "increaseByOne":
//      return { counter: state.counter + 1 };
//    case "decreaseByOne":
//      return { counter: state.counter -1 };
//    default:
//        return state;
//  }
//}

//// store, store has subscribe, dispatch, getState
//function createStore(reducers) {
//    let state = {};
//    let cbs = [];
//    state = reducers(undefined, {type: '__INIT__'})
//    function getState() {
//        return state;
//    }

//    function subscribe(cb) {
//        cbs.push(cb);
//    }

//    function dispatch(action) {
//        state = reducers(state,action);
//        cbs.forEach((cb) => cb())
//    }

//    return {
//        getState,
//        subscribe,
//        dispatch
//    }
//}

//const store = createStore(counterReducer);
//store.subscribe(() => console.log(store.getState()))
//store.dispatch({type: 'increaseByOne'})
//store.dispatch({type: 'increaseByOne'})
//store.dispatch({type: 'increaseByOne'})

//---------------------------------

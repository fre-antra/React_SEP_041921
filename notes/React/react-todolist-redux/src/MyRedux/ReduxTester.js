import React from 'react';
import { pStore } from '../MyRedux/index';
import { connect } from 'react-redux';
import { myconnect } from '../MyReactRedux/index';

export default class ReduxTester extends React.Component {
  //state = { value: 0 };
  componentDidMount() {
    this.unsub = pStore.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsub();   //this is function
  }
  render() {
    const { getState, dispatch } = pStore;      // 跟pStore.getState() 一样
    console.log(this);
    return (
      <> 
        <h1>Tester</h1>
        <h4>CounterFromRedux: {getState().value}</h4>
        {/* <h4>CounterFromState: {this.state.value}</h4>   上面单独的不工作，因为update getState里面的值 但是不re-render didn't update the data in our component*/}
        <button
          onClick={
            //this.setState({ value: this.state.value + 1 });     this will bind this keyword when we declaring this anoymous method, which is render scope
            //dispatch({ type: 'counter/incremented' });
            //console.log(getState().values);
            //this.forceUpdate();     // will force re-render

            function () { // 这种arrow就不是render scope 了 
            }  

          }
        >
          Add
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'counter/decremented' });
          }}
        >
          sub
        </button>
      </>
    );
  }
}

export class ReduxTester2 extends React.Component {
  componentDidMount() {
    this.unsub = pStore.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsub();
  }
  render() {
    const { getState, dispatch } = pStore;
    console.log(this);
    return (
      <>
        <h1>Tester</h1>
        <h4>CounterFromRedux: {getState().value}</h4>
      </>
    );
  }
}

class ReactReduxTester extends React.Component {        // is much clean no subscribe those thing need
  render() {
    const { counter, increment, decrement, title } = this.props;    // 通过connect传进来的
    console.log(title);
    return (
      <>
        <h1>React Redux Tester</h1>
        <h4>CounterFromStore: {counter}</h4>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
      </>
    );
  }
}
function mapStateToProps(state) {     // state from store
  return { counter: state.value };
}
const mapDispatchToProps = (dispatch) => {    // match dispatch to current component
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented' }),
  };
};

// var props = curry(function(key,obj){
//   return obj[key];
// })

// export const ReactReduxTest = connect(
//   mapStateToProps,PP
//   mapDispatchToProps
// )(ReactReduxTester);

export const ReactReduxTest = myconnect(
  mapStateToProps,
  mapDispatchToProps
)(ReactReduxTester);    // curring function   myconnect will use store and send those data to ReactReduxTester

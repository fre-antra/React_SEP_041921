import React from 'react';
import { pStore } from '../MyRedux/index';
import { connect } from 'react-redux';
import { myconnect } from '../MyReactRedux/index';

export default class ReduxTester extends React.Component {
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

        <button
          onClick={() => {
            dispatch({ type: 'counter/incremented' });
          }}
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

class ReactReduxTester extends React.Component {
  render() {
    const { counter, increment, decrement, title } = this.props;
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
function mapStateToProps(state) {
  return { counter: state.value };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented' }),
  };
};

// export const ReactReduxTest = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReactReduxTester);

export const ReactReduxTest = myconnect(
  mapStateToProps,
  mapDispatchToProps
)(ReactReduxTester);

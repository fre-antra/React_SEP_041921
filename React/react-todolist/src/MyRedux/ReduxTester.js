import React from 'react';
import { pStore } from '../MyRedux/index';

export default class ReduxTester extends React.Component {
  componentDidMount() {
    pStore.subscribe(() => this.forceUpdate());
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
    pStore.subscribe(() => this.forceUpdate());
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

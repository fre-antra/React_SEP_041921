import React from 'react';
import { store } from './myRedux';
import { actionCreater } from './myRedux';
// import { connect } from 'react-redux';
import { connect } from '../MyReactRedux/MyReactRedux';

export const MyContext = React.createContext('');

class ReduxCounterApp extends React.Component {
  handleIncreament = () => {
    alert('CHANGE!!!');
    this.props.increment();
  };

  render() {
    console.log('props from connect', this.props);
    const { counter } = this.props;
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={this.handleIncreament}>increment</button>
      </div>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
    title: state.title,
    hello: state.hello,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    increment: () => dispatch(actionCreater.increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterApp);

export class TestCounterApp extends React.Component {
  static contextType = MyContext;
  render() {
    return <h1>TestAPp</h1>;
  }
}

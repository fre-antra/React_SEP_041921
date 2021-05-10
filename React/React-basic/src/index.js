import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import 'index.scss';
class HelloMessage extends React.Component {
  render() {
    return <Home />;
    // return React.createElement('div', null, 'Hello ', this.props.name);
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function foo() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

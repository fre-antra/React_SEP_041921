import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReduxTest, { ReduxTester2 } from './MyRedux/ReduxTester';

import WithTodosData from './components/WithTodosData/WithTodosData';

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Title2(props) {
  return <h4>{props.title}</h4>;
}
// class RenderPropsTest extends React.Component {
//   render() {
//     return (
//       <WithTodosData
//         render={(title) => <Title2 title={title}></Title2>}
//       ></WithTodosData>
//     );
//   }
// }

ReactDOM.render(
  <>
    <ReduxTest />
    <ReduxTester2></ReduxTester2>
  </>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReduxCounterApp, {
  TestCounterApp,
  MyContext,
} from './myRedux/ReduxCounterApp';
// import { Provider } from 'react-redux';
import { Provider } from './MyReactRedux/MyReactRedux';

import { store } from './myRedux/myRedux';
import { HooksApp, ClassApp, NewCounterApp } from './hooks/HooksApp';

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

// class Myapp extends React.Component {
//   state = {
//     remove: false,
//   };

//   render() {
//     return (
//       <Provider store={store}>
//         <ReduxCounterApp name="patrick" />
//         {this.state.remove ? null : <ReduxCounterApp />}
//         <button
//           onClick={() => {
//             this.setState({
//               remove: true,
//             });
//           }}
//         >
//           Remove Second Counter
//         </button>
//       </Provider>
//     );
//   }
// }

const HooksTest = (
  <div>
    <HooksApp></HooksApp>
    <hr></hr>
    <ClassApp></ClassApp>
    <hr></hr>
    <NewCounterApp></NewCounterApp>
  </div>
);

ReactDOM.render(<App></App>, document.getElementById('root'));

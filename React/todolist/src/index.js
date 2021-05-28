

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TestRedux from "./components/Redux/TestRedux";
import { store } from "./components/Redux/store";
// redux
//import { Provider } from "react-redux";
import MyProvider from "./components/Redux/MyProvider";
import Router from './components/Router/Router'
import {Hook3} from './components/Hook/Hook';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Provider store={store}>
      <TestRedux></TestRedux>
    </Provider>*/}
    {/*<MyProvider store={store}>
      <TestRedux title="test"></TestRedux>
    </MyProvider>*/}
    {/*<TestRedux></TestRedux>*/}
    {/*<Router></Router>*/}
    <Hook3></Hook3>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

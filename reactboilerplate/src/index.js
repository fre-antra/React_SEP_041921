import Home from './Home/Home';
import ReactDOM from 'react-dom';
import React from 'react';

//class Hello extends React.Component {
//    render() {
//        return <Home />
//    }
//}
const output = document.querySelector("#output");
ReactDOM.render(<Home />, output);

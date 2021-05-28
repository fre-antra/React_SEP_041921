import React, { Component } from 'react';
import Logo from '../Logo/index';
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './index.css'

export default class Navbar extends Component {
    render() {
        // const { handleChangeActivePage } = this.props;
        return (
            <div className="navbar">
                <Logo></Logo>
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        )
    }
}

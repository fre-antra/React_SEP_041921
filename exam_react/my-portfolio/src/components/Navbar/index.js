import React, { Component } from 'react';
import Logo from '../Logo/index';
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './index.css'

export default class Navbar extends Component {
    render() {
        // const { handleChangeActivePage } = this.props;
        return (
            <div className="navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                            <Logo></Logo>
                        </div>

                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                            <div className="primary-nav">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/portfolio">Portfolio</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

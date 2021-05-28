import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import './index.css';

export default class Layout extends Component {
    render() {
        const { children, handleChangeActivePage } = this.props;
        return (
            <>
                <header className="header">
                    <Navbar handleChangeActivePage={handleChangeActivePage}></Navbar>
                </header>
                <main className="content">{children}</main>
                <footer className="footer">
                    <Footer></Footer>
                </footer>
            </>
        )
    }
}

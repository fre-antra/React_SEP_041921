import React, { Component, Fragment } from 'react';
import Contact from '../Contact';
import Info from '../Info/index';
import Portfolio from '../Portfolio';


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Info />
                <Portfolio />
                <Contact />
            </Fragment>
        )
    }
}

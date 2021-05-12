import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
//import {Link} from 'react-router-dom'

import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return(
            <nav className='app_nav'>
                <h1>
                <FontAwesomeIcon className="nav_icon" icon={faMusic}/>
                    {' '}{' '}Search Albums
                </h1> 
            </nav>
        )
    }
}
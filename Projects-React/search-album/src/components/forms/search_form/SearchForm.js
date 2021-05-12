import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import {Link} from 'react-router-dom'

import './SearchForm.css'

export default class SearchForm extends Component {
    render() {
        return(
            <form id='search_form'>
                <input id="search_input" className='searchAlbum__input' 
                    type="text"
                    placeholder="Search..."
                    autoComplete="off"/>
                <button type='submit' id='search_button'>
                    <FontAwesomeIcon className='app_icon' icon={faSearch}/>
                </button>
        </form>
        )
    }
}
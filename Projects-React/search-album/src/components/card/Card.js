import React, {Component} from 'react';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faMusic } from '@fortawesome/free-solid-svg-icons'
//import {Link} from 'react-router-dom'

import './Card.css'

export default class Card extends Component {
    static defaultProps = {
        album:{}
    }
    render() {
        const {album} = this.props
        return(
            <div className='card'>
                <img src={album.artworkUrl100} alt=''/>
                <div className='card_content'>{album.collectionName}</div>
            </div>
        )
        
    }
}
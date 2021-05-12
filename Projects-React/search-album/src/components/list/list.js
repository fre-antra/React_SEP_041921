import React, {Component} from 'react';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faMusic } from '@fortawesome/free-solid-svg-icons'
//import {Link} from 'react-router-dom'

import Card from '../card/Card'

import {GeneralApiServices} from '../../services/api.service'

import './list.css'

export default class List extends Component {
    static defaultProps = {
        artist:'',
    }
    state = {
        results:{},
    }
    componentDidMount(){
        GeneralApiServices.getAllItems('Justin')
            .then(json=>this.setState({
                results: json,
            }))
    }
    render() {
        console.log(this.state.results)
        const {results} = this.state
        return(
            <div className='list'>
                {results.resultCount>0 && results.results.map((item,index)=><Card album={item} key={index}/>)}
            </div>
        )
        
    }
}
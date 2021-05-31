import React from 'react';
import '../../styles/_base.scss';

export default (props) => {
    const {className} = props;
    return <div className={`${className}`}></div>
}
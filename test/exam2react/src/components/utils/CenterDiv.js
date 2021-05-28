import React from 'react';
import './CenterDiv.scss';

const CenterDiv = (props) => {
    return (
        <div className={`center-div ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export const CenterDivXY = (props) => {
    return (
        <div className={`center-divXY ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default CenterDiv;
import React from 'react';
import './CenterDiv.scss';

const CenterDiv = (props) => {
    return (
        <div className={`center-div ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export const CenterDivRow = (props) => {
    return (
        <div className={`center-div__row ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export const CenterDivColumnRow = (props) => {
    return (
        <div className={`center-div__column-row ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default CenterDiv;
import React from 'react';
import './CenterDiv.scss';

const CenterDiv = (props) => {
    return (
        <div className="center-div" style={props.style}>
            {props.children}
        </div>
    )
}

export default CenterDiv;
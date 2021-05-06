import React, { useState } from 'react';


export default function Card(props){
    const {img, title} = props
    console.log(typeof img)
    return(
        
            <div className="card">
                <img className="card-avatar" src={img}/>
                <p>{title}</p>
            </div>
        
    )
}
import React from 'react'
import './index.css'
import logo from '../../images/logo.svg'

export default function Logo() {
    return (
        <div className="logo">
            <a href="index.html"><img src={logo} alt="" /></a>
        </div>
    )
}

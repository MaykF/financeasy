import React from 'react'
import './login.css'
import logo from '../../icons/icone-login.png'
import senha from '../../icons/icone-senha.png'

export default function login(){
    return (
        <div className='login'>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
            <div className='senha'>
                <img src={senha} alt=""/>
            </div>
        </div>
    )
}
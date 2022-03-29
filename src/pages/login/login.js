import React from 'react'
import './login.css'
import logo from '../../icons/imagem-login2.png'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff} from "react-icons/hi";

export default function login(){
    return (
        <div className='login'>

            <div className='login-logo'>
                <img src={logo} alt=""/>
            </div>

            <div className='login-right'>
                <h2>Financeasy</h2>

                <div className='loginInputEmail'>
                    <MdEmail/>
                    <input type="text"
                    placeholder="Digite seu email"
                    />
                </div>

                <div className="loginInputPassword">
                    <MdLock />
                    <input  
                        type="text"
                        placeholder='Digite sua senha'
                    />
                </div>

                
                <button type="submit">
                    Entrar
                </button>

                <h4>Não tem conta?</h4>

                <button type='submit'>
                    Cadastrar
                </button>
                
            </div>
        </div>
    )
}
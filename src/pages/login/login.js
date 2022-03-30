import React, { useState } from 'react'
import './login.css'
import logo from '../../icons/imagem-login2.png'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff} from "react-icons/hi";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="loginInputPassword">
                    <MdLock />
                    <input  
                        placeholder="Digite sua senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <div className="login-eye">
                        {show ? (
                            <HiEye 
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <HiEyeOff
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>

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
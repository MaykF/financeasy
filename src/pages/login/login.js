import React, { useState } from 'react';
import './login.css';
import { Link} from "react-router-dom";
import logo from '../../icons/imagem-login2.png';
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";
import { HiEye, HiEyeOff} from "react-icons/hi";

export default () => {
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

                    
                    <Link to="/home" id="button_login">
                        <button type="submit">
                            Entrar
                        </button>
                    </Link>

                    <div className='login_google'> 
                        <FcGoogle className="google_icon"/> Fazer login com o Google
                    </div>
                    <div className='login_facebook'>
                        <FaFacebookSquare className='facebook_icon'/> Fazer login com o Facebook
                    </div>

                    <h4>Não tem conta?</h4>
                    
                    <Link to="/cadastrar" id="button_login">
                        <button type='submit'>
                            Cadastrar
                        </button>
                    </Link>
                    
                </div>
            </div>
    )
}
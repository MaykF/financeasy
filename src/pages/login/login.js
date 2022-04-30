import React, { useState } from 'react';
import './login.css';
import { Link} from "react-router-dom";
import { AreaLogin } from './styled';
import logo from '../../icons/imagem-login2.png';
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";
import { HiEye, HiEyeOff} from "react-icons/hi";
import Api, { auth } from '../../Api';

export default ({onReceiveGoogle}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    
    const ActionLoginGoogle = async () =>{
        let result = await Api.googleLogar();
        
        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Erro ao fazer login com o Google');
        }
    }

    const Logar = e => {

        let result = auth.signInWithEmailAndPassword(
            email,
            password
        );
        
        if(result){
            alert(result);
        }else{
            alert('Erro ao fazer login com Email e senha');
        }
        
       /* auth.signInWithEmailAndPassword(
            email,
            password
        ).then(user => {
            alert(user)
        }).catch(err =>{
            console.log(err)
        })
       */
    }

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        
        <AreaLogin>
            <div className='login'>
                <div classname="login-logo">
                    <Link to="/login">
                        <img src={logo} alt=""/>
                    </Link>
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

                    
                    
                        <button type="submit" onClick={Logar}>
                            Entrar
                        </button>
                    
                    
                    
                    
                        <div className='login_google' onClick={ActionLoginGoogle}> 
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
        </AreaLogin>
        
    )
}
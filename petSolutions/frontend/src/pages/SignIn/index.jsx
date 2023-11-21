
import { useState } from 'react';
import { Envelope, Lock, Eye, EyeSlash } from 'phosphor-react'
import { FcGoogle } from "react-icons/fc";



import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../services/firebase'

import './styles.scss'


export function SignIn(){
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)    
    }

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
    
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
            
            <div className="login">
                <div className="login-logo">
                    <img src="https://cdn.icon-icons.com/icons2/3862/PNG/512/login_icon_240424.png"
                    alt="Login App"></img>
                </div>

                <div className="login-camp">
                    <h1>LOGIN</h1>
                    <div className="login-input-email">
                        <Envelope></Envelope>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"   
                            value={email}      
                            onChange={e => setEmail(e.target.value)}                   
                        ></input>
                    </div>

                    <div className="login-input-password">
                        <Lock></Lock>
                        <input                                
                                placeholder="Digite sua senha"    
                                type={show ? "text" : "password"}
                                value={password}      
                                onChange={e => setPassword(e.target.value)}                         
                        ></input>     
                        <div className="login-eye">
                            {show ? (
                                <Eye
                                    size={20}
                                    onClick={handleClick}
                                ></Eye>
                            ) : (
                                <EyeSlash
                                    size={20}
                                    onClick={handleClick}
                                ></EyeSlash>
                            )}
                        </div>                   
                    </div>
                    <button type="submit">
                         Entrar
                    </button>
                    
                    <div className="login-inscricao">
                        <h4>Não tem uma conta?</h4>
                        <a href="url_da_sua_pagina_de_inscricao" class="link-inscricao">
                            Inscrever-se
                        </a>
                    </div>

                    <div className="login-google">
                        <h4>Logar Com</h4>
                        <button type="button" className="button" onClick={handleGoogleSignIn}>
                            <FcGoogle />                        
                        </button> 
                    </div>
                    
                </div>
            </div>  


              


      
        
        </div>        
    )
}
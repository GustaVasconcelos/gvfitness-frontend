import '../styles/style.css';
import '../styles/login.css';

import React, { useEffect, useState } from "react";

import fundoLogin from '../assets/img/login/fundo-login.svg';
import Message from '../components/message';
import MaskedInput from '../functions/MaskedInput';
import api from '../services/api';
import { getToken, setToken } from '../services/localStorage';


const Login = () => {

    const [type, setType] = useState('');
    const [msg, setMsg] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMsg('');

        const data = {
            cpf,
            password
        }
        try {
            const res = await api.post("/user/login", data);
            setToken(res.data.token);
            window.location.href = '/Home';
        } catch(err) {
            const res = err.response
            setMsg(res.data.error)
            setType('error');
        }
    }

    useEffect(() =>{
        const token = getToken();

        if (token) {
            window.location.href = '/Home';
        }
    },[])

    return (
        <section id="container-login">
            <div className="login-img">
                <img src={fundoLogin} alt="Fundo login"/>
            </div>
            <div className="login-form" onSubmit={handleSubmit}>
                <form action="">
                    <div className='login-form-title'>
                        <h1>Login</h1>
                    </div>
                    <div className='login-form-input'>
                        <p>CPF:</p>
                        <MaskedInput value={cpf} onChange={(e) => setCpf(e.target.value)} placerholder="123.456.789-10"/>
                    </div>
                    <div className='login-form-input'>
                        <p>Senha:</p>
                        <input type="password" value={password} placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} placerholder="Digite sua senha"/>
                    </div>
                    <div className='login-form-button'>
                        <input type="submit"  value="Login"/>
                    </div>
                    <div className='login-form-message'>
                        {
                            msg&&
                            <Message type={type} msg={msg}/>
                        }
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;
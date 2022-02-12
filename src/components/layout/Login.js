import React,{useState} from 'react'
import {MdEmail, MdLock,MdVisibilityOff, MdVisibility, MdOutlineVisibilityOff} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Login.css'


 export default function Login() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [show, setShow] = useState("false");

     const handleShow = (e) =>{
         e.preventDefault();
         setShow(!show);
     };

    return (
        <form className="form" method=''>
            <div className="loginInputEmail">
            <MdEmail/>
                <input type="email" placeholder="email@example.com" value={email} onChange={e=>setEmail(e.target.value)}/>  
            </div>
            <div className="loginInputSenha">
                <MdLock/>
                <input type={show ? 'text' : 'password'} placeholder="Digite sua senha" value={password} onChange={e=>setPassword(e.target.value)}/>
                <div className="showEye">
                    {show ? (<MdVisibility onClick={handleShow}/>)
                    : (<MdVisibilityOff onClick={handleShow}/>)}
                    </div> 
            </div>
            <span className="forgot"><Link to="/" className="forgotpassword">Esqueceu a senha?</Link></span>
            <button type="submit" className="entrar">Entrar</button>
            <p className="signin">Não tem conta ainda?<Link to="/cadastrar" className="">Criar Conta</Link></p>     
        </form>
    );
}

import React from 'react'
import {FaTimes,FaUserCircle} from 'react-icons/fa'
import './Modal.css'
import Login from '../layout/Login'

function Modal({closeModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
            <span><button  onClick={()=>closeModal(false)} className="closeButton"><FaTimes/></button></span>
            <FaUserCircle size={60}/>
            <p>Login</p>
                <Login/>
            </div>    
        </div>
    )
}

export default Modal

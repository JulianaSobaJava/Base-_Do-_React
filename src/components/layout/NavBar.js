import {Link} from 'react-router-dom';
import React,{useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import Modal from './Modal'
import "./NavBar.css";

function NavBar(){
  const [openModal, setOpenModal] = useState(false);
  const [navbar,setNavbar] = useState(false);

  const changeNavBackground = ()=>{
      if(window.scrollY > 50){
        setNavbar(true);
      }else{
        setNavbar(false);
      };
  };
  window.addEventListener('scroll', changeNavBackground);

  const[isMobile, setMolibe] = useState(false);



    return (
        <>
      <div>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to="" className="logo"><h1>Instructor</h1></Link>
          <ul className="nav-links">
              <li><Link to="/" className="inicio a">Inicio</Link></li>
              <li><Link to="/noticias" className="noticias a">Notícias</Link></li>
              <li><Link to="/instructor" className="instructor a">Instructor</Link></li>
              <li><Link to="/escolas" className="escolas a">Escolas</Link></li>
              <li><Link to="/sobre" className="sobre a">Sobre</Link></li>
              <li><Link to="/contact" className="contact a">Contacto</Link></li> 
             <button to="/" className="log" onClick={()=>{
                setOpenModal(true)}}><span  className="timeOut"><FaUserCircle/></span><span className="login">Login</span></button>
          </ul> 
      </nav>
      {openModal && <Modal closeModal={setOpenModal}/>} 
      </div>
      </>
    );
}
export default NavBar
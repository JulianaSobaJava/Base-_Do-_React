import React  from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Contact from './components/pages/Contact';
import Instructor from './components/pages/Instructor';
import Escolas from './components/pages/Escolas';
import Noticias from './components/pages/Noticias';
import Cadastrar from './components/pages/Cadastrar';


import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Container>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>

        <Route path="/instructor" element={<Instructor/>}></Route>

        <Route path="/sobre" element={<Sobre/>}></Route>

        <Route path="/contact" element={<Contact/>}></Route>

        <Route path="/escolas" element={<Escolas/>}></Route>

        <Route path="/noticias" element={<Noticias/>}></Route>
        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
       </Routes> 
    </Container>

    </BrowserRouter>

  );
}

export default App;

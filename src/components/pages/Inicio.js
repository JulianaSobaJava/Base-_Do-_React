import "./Inicio.css"; 
import React from "react";

export default function Inicio(){
    return(
        <>
          <header>
            <div>
            <h1>Encontre a escola e o curso que melhor combinam contigo, aqui!</h1>
            <p> a sua descoberta educacional a um click</p>
            <button type="button">Começar Agora</button>
            </div>
          </header>
        <main>
          <aside className="aside-left">Olá</aside>
          <section className="main"></section>
          <aside className="aside-right"></aside> 
        </main>
        </>      
    );
}
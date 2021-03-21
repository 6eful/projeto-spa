import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function Contato() {
  return (
    <div class="home" id="contato">
      <h1>Entre em contato</h1>
      <h2>Telefone: (XX) 9 9999-9999</h2>
      <h3>Rua: Alguma rua, endereço</h3>
      <Link smooth to="#home" style={{color: '#fff'}}>Ir para a Home</Link>
      <Link smooth to="#sobre" style={{color: '#fff'}}>Ir para Sobre</Link>
    </div>
  );
}

export default Contato;

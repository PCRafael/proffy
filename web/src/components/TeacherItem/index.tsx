import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/54128315?s=460&u=cb00e9c8404f164a63dfc8217195071a02a192cd&v=4" alt="Rafael Couto"/>
      <div>
        <strong>Rafael Couto</strong>
        <span>Tênis de mesa</span>
      </div>
    </header>

    <p>
      Entusiasta das mais avançadas técnicas de tênis de mesa.
      <br/><br/>
      Apaixonado em ensinar pessoas a sairem do ping-pong e se dedicarem mais a este esporte maravilhoso.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;
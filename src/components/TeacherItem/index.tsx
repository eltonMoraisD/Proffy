import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/39710764?s=460&u=7912ae5b1093e79f24c6f42bee54951a313d551d&v=4" alt="Elton Morais"/>
        <div>
          <strong>Elton Morais</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <br></br><br></br>
        Etiam dictum felis in sem fermentum, sed viverra ligula mattis elit in tristique 
        vestibulum, dui ante euismod quam, non laoreet turpis lacus a mi.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>2.000$00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contacto
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;